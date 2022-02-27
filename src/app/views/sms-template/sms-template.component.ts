import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formControlTypes } from '../../contants/form-control-types';
import { BHControlDataSourceFilter, BHSelectControlType } from '../../interfaces/select-control-type';
import { BHTextControlType } from '../../interfaces/text-control-type';
import { BhCoreService } from '../../services/bh-core.service';
import { EventService } from '../../services/event.service';
import { BhSelectControlComponent } from '../bh-select-control/bh-select-control.component';
declare var $: any;

@Component({
  selector: 'app-sms-template',
  templateUrl: './sms-template.component.html',
  styleUrls: ['./sms-template.component.css']
})
export class SmsTemplateComponent implements OnInit {

    constructor(private bhCoreService: BhCoreService, private eventService: EventService) { }

    public entitySchemaSMSTemplate: BHSelectControlType;
    public entitySchemaCustomerGroup: BHSelectControlType;
    public entitySchemaSMSTemplateContent: BHTextControlType;
    noteForm = new FormGroup({});
    formControlSMSTemplate: any;
    formControlSMSTemplateContent: any;
    formControlCustomerGroup: any;
    @ViewChildren(BhSelectControlComponent) selectControls: QueryList<BhSelectControlComponent>;
    smsTemplateDataSource: any[] = [];
    customerGroupDataSource: any[] = [];
    customerDataSource: any[] = [];
    entitySchemaName: string = '';
    showSendSMSTab: boolean;
    optionData: any[]=[];

    ngOnInit(): void {
        this.entitySchemaSMSTemplate =  {
            name: 'smsTemplateId',
            displayName: 'Mẫu tin nhắn',
            placeHolder: 'Please select an option',
            sequenceNumber: 1,
            type: formControlTypes.selectList,
            hidden: false,
            readonly: false,
            required: true,
            multiple: false,
            optionItems: null,
            dataSource: {
                entityPluralName: 'smstemplates',
                displayFieldName: 'name',
                valueFieldName: 'id',
                filter: null
            },
            style:{
                grid:{
                    header:"width-twohundred-pixel"
                }
            },
            events:{
                hasChangeEvent: true
            }
        };
        this.entitySchemaSMSTemplateContent =  {
            name: 'content',
            displayName: 'Nội dung',
            sequenceNumber: 2,
            type: formControlTypes.textArea,
            placeholder: 'Nội dung',
            required: true,
            minLength: 3,
            maxLength: 512,
            hidden: false,
            readonly: true,
            style:{
                grid:{
                    cell:"truncate"
                }
            }
        };
        this.entitySchemaCustomerGroup =  {
            name: 'customerGroupId',
            displayName: 'Nhóm khách hàng',
            placeHolder: 'Please select an option',
            sequenceNumber: 3,
            type: formControlTypes.selectList,
            hidden: false,
            readonly: false,
            required: true,
            multiple: false,
            optionItems: null,
            dataSource: {
                entityPluralName: 'customergroups',
                displayFieldName: 'name',
                valueFieldName: 'id',
                filter: null
            },
            style:{
                grid:{
                    header:"width-twohundred-pixel"
                }
            },
            events:{
                hasChangeEvent: true
            }
        };
        this.noteForm.addControl(this.entitySchemaSMSTemplate.name, new FormControl('', [Validators.required]));
        this.formControlSMSTemplate = this.noteForm.controls[this.entitySchemaSMSTemplate.name];
        this.noteForm.addControl(this.entitySchemaSMSTemplateContent.name, new FormControl('', [Validators.required]));
        this.formControlSMSTemplateContent = this.noteForm.controls[this.entitySchemaSMSTemplateContent.name];
        this.noteForm.addControl(this.entitySchemaCustomerGroup.name, new FormControl('', [Validators.required]));
        this.formControlCustomerGroup = this.noteForm.controls[this.entitySchemaCustomerGroup.name];

        this.bhCoreService.getdataSourceData(this.entitySchemaSMSTemplate.dataSource.entityPluralName, null, this.setSMSTemplateDataSource.bind(this));
        this.bhCoreService.getdataSourceData(this.entitySchemaCustomerGroup.dataSource.entityPluralName, null, this.setCustomerGroupDataSource.bind(this));

        this.eventService.change.subscribe(data => {
            console.log('SMS tempalte change.subscribe' + JSON.stringify(data));
            if(data?.controlName === 'smsTemplateId' && data?.eventName === 'change'){
                this.noteForm.patchValue({
                    content: data.value?.content
                });
            }
            if(data?.controlName === 'customerGroupId' && data?.eventName === 'change'){
                console.log('customerGroupId: ' + JSON.stringify(data.value?.customerIds));
                let customerfilter: BHControlDataSourceFilter[] = [];
                data.value?.customerIds.forEach(cusId => {
                    customerfilter.push({
                        fieldName: 'id',
                        operator:'=',
                        fieldValue: cusId
                    });
                    this.bhCoreService.getdataSourceData('customers', customerfilter, this.setCustomerDataSource.bind(this));
                });
            }
        });
    }
    setSMSTemplateDataSource(result):void{
        console.log(JSON.stringify(result));
        this.smsTemplateDataSource = result;
        this.selectControls.find(a => a.controlName === 'smsTemplateId')?.populateData(result);
    }

    setCustomerGroupDataSource(result):void{
        console.log(JSON.stringify(result));
        this.customerGroupDataSource = result;
        this.selectControls.find(a => a.controlName === 'customerGroupId')?.populateData(result);
    }
    setCustomerDataSource(result):void{
        console.log(JSON.stringify(result));
        this.customerDataSource = result;
    }

    showSMSModal():void {
        $("#sendSMSModal").modal('show');
    }
    hideSMSModal():void {
        $("#sendSMSModal").modal('hide');
    }

    submit(){

    }

    
}
