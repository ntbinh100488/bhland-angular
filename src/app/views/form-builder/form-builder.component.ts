import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
        private bhCommonService: BhCommonService,
        private bhCoreService: BhCoreService
    ) {}

    entitySchemaProperties: any[] = [];
    entitySchema: any;
    entitySchemaName: string;
    entityData: any = {};
    description: string;
    noteForm = new FormGroup({});

    ngOnInit(): void {
        let href = this.router.url;   // this.router.url = '/note'
        let schemaName = this.bhCommonService.routeUrlToSchemaName(this.router.url);
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
        setTimeout(()=> {
            this.noteForm.patchValue({
                'description': 'Binh'
            });
        }, 0);
    }

    get formControls(){
        return this.noteForm.controls;
    }

    submit(){
        console.log(this.noteForm.value);
        let result = this.bhCoreService.submitForm(this.entitySchema.plural, this.noteForm.value);
    }
}
