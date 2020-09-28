import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BhCommonService } from '../../services/bh-common.service';
import { BhCoreService } from '../../services/bh-core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BhSelectControlComponent } from '../bh-select-control/bh-select-control.component';
import { formControlTypes } from '../../contants/form-control-types';
import { dateTimeConfigs } from '../../contants/date-time';

import * as moment from 'moment';
export default moment;

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private bhCommonService: BhCommonService,
        private bhCoreService: BhCoreService
    ) {}

    entitySchemaProperties: any[] = [];
    entitySchema: any;
    entitySchemaName: string;
    noteForm = new FormGroup({});
    isCanceled: boolean = false;

    @Output() tableHideModal = new EventEmitter<string>();
    @Output() createdCallback = new EventEmitter<any>();
    @Output() editedCallback = new EventEmitter<any>();
    @Output() deletedCallback = new EventEmitter<any>();
    @ViewChildren(BhSelectControlComponent) selectControls: QueryList<BhSelectControlComponent>;

    ngOnInit(): void {
        let href = this.router.url;   // this.router.url = '/note'
        let schemaName = this.bhCommonService.routeUrlToSchemaName(href);
        this.entitySchema = this.bhCoreService.getEntitySchema(schemaName);
        this.entitySchemaName = this.entitySchema.name;
        this.entitySchemaProperties = this.bhCoreService.getEntityProperties(schemaName);
        this.entitySchemaProperties.forEach(entitySchemaPropertyItem => {
            let frmFieldValidation = [];
            if(entitySchemaPropertyItem.required){
                frmFieldValidation.push(Validators.required);
            }
            if(entitySchemaPropertyItem.minLength){
                frmFieldValidation.push(Validators.minLength(entitySchemaPropertyItem.minLength));
            }
            this.noteForm.addControl(entitySchemaPropertyItem.name, new FormControl('', frmFieldValidation));
            entitySchemaPropertyItem.formControl = this.noteForm.controls[entitySchemaPropertyItem.name];
        });
        this.entitySchemaProperties.sort((a, b) => (a.sequenceNumber > b.sequenceNumber) ? 1 : -1);
        this.initForm(undefined, undefined);
    }

    initForm(entityId: number, callbackFunc: any) : void{
        if(entityId){
            this.bhCoreService.getFormData(this.entitySchema.plural, entityId, this.setFormValue.bind(this, callbackFunc));
        }else{
            this.noteForm.reset();
        }
    }

    markupFormData(formData: any):any{
        let markedUpFormData = formData;
        this.entitySchemaProperties.filter
        let dateOnlyFieldSchemas = this.entitySchemaProperties.filter(function(fieldSchema) {
            return fieldSchema.type === formControlTypes.dateOnly;
        });

        dateOnlyFieldSchemas.forEach(fieldSchema => {
            markedUpFormData[fieldSchema.name] = moment(formData[fieldSchema.name]).format(dateTimeConfigs.controlFormat);
        });

        return markedUpFormData;
    }

    setFormValue(callbackFunc: any, formData: any){
        setTimeout(()=> {
            this.noteForm.reset();
            this.isCanceled = false;
            if(formData 
                && this.entitySchema.codePrefix 
                && formData.hasOwnProperty('code') 
                && formData.hasOwnProperty('id') 
                && !formData.code
                && formData.id){
                formData.code = `${this.entitySchema.codePrefix}-${formData.id}`;
            }
            let markedUpFormData = this.markupFormData(formData);
            this.noteForm.patchValue(markedUpFormData);
            if(callbackFunc){
                callbackFunc();
            }
        }, 0);
    }

    get formControls(){
        return this.noteForm.controls;
    }

    submit(): void{
        if(this.isCanceled) return;

        this.isCanceled = false;
        let result = this.bhCoreService.submitForm(this.entitySchema.plural, this.noteForm.value, this.createdCallback, this.editedCallback);
        this.tableHideModal.emit('close modal');
    }
    cancel(){
        this.isCanceled = true;
        this.tableHideModal.emit('close modal');
    }
}
