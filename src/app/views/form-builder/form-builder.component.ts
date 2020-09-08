import { Component, OnInit, Input } from '@angular/core';
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

    @Input() entityId: number;

    entitySchemaProperties: any[] = [];
    entitySchema: any;
    entitySchemaName: string;
    entityData: any = {};
    description: string;
    noteForm = new FormGroup({});
    firstFormControl: FormControl;

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
        let boundSetFormValue = this.setFormValue.bind(this);
        if(this.entityId){
            this.bhCoreService.getFormData(this.entitySchema.plural, this.entityId, boundSetFormValue);
        }else{
            this.route.queryParams.subscribe(params => {
                if(params['id']) {
                    this.bhCoreService.getFormData(this.entitySchema.plural, params['id'], boundSetFormValue);
                }
            });
        }
        
        this.firstFormControl = this.entitySchemaProperties[0].formControl;
    }

    setFormValue(formData: any){
        setTimeout(()=> {
            this.noteForm.patchValue(formData);
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
