import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BhCommonService } from '../../services/bh-common.service';
import { BhCoreService } from '../../services/bh-core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    @Output() tableHideModal = new EventEmitter<any>();

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
        this.initForm(undefined, undefined);
    }

    initForm(entityId: number, callbackFunc: any) : void{
        if(entityId){
            this.bhCoreService.getFormData(this.entitySchema.plural, entityId, this.setFormValue.bind(this, callbackFunc));
        }else{
            this.noteForm.reset();
        }
    }

    setFormValue(callbackFunc: any, formData: any){
        setTimeout(()=> {
            this.noteForm.reset();
            this.noteForm.patchValue(formData);
            if(callbackFunc){
                callbackFunc();
            }
        }, 0);
    }

    get formControls(){
        return this.noteForm.controls;
    }

    submit(){
        let result = this.bhCoreService.submitForm(this.entitySchema.plural, this.noteForm.value);
    }
    cancel(){
        this.tableHideModal.emit('close modal');
    }
}
