
import {formControlTypes} from '../contants/form-control-types';
import { BHTextControlType } from '../interfaces/text-control-type';
import { BHBooleanControlType } from '../interfaces/boolean-control-type';
import { BHSelectControlType } from '../interfaces/select-control-type';
import { BHNumberControlType } from '../interfaces/number-control-type';
import { BHRadioControlType } from '../interfaces/radio-control-type';
import { tableConfigs } from '../contants/table-configs';

let idField: BHTextControlType =  {
    name: 'id',
    displayName: 'Id',
    sequenceNumber: 0,
    type: formControlTypes.number,
    placeholder: 'Id',
    required: false,
    minLength: undefined,
    maxLength: undefined,
    hidden: true,
    readonly: false
};
let descriptionField: BHTextControlType =  {
    name: 'description',
    displayName: 'Description',
    sequenceNumber: 1,
    type: formControlTypes.textArea,
    placeholder: 'descriptionField',
    required: true,
    minLength: 3,
    maxLength: 512,
    hidden: false,
    readonly: false
};
let testField: BHTextControlType =  {
    name: 'test',
    displayName: 'Test',
    sequenceNumber: 2,
    type: formControlTypes.textBox,
    placeholder: 'Test',
    required: false,
    minLength: 3,
    maxLength: 20,
    hidden: false,
    readonly: false
};
let checkBoxField: BHBooleanControlType =  {
    name: 'checkbox',
    displayName: 'checkbox',
    sequenceNumber: 2,
    type: formControlTypes.checkBox,
    hidden: false,
    readonly: false
};
let numberField: BHNumberControlType =  {
    name: 'number',
    displayName: 'number',
    sequenceNumber: 3,
    type: formControlTypes.number,
    hidden: false,
    readonly: false,
    stepValue:1,
    minValue:0,
    maxValue: 10,
    required: true
};
let rangeField: BHNumberControlType =  {
    name: 'rangeField',
    displayName: 'rangeField',
    sequenceNumber: 4,
    type: formControlTypes.rangeNumber,
    hidden: false,
    readonly: false,
    stepValue:1,
    minValue:0,
    maxValue: 10,
    required: true
};
let selectListField: BHSelectControlType =  {
    name: 'selectListField',
    displayName: 'selectListField',
    placeHolder: 'Please select an option',
    sequenceNumber: 5,
    type: formControlTypes.selectList,
    hidden: false,
    readonly: false,
    required: true,
    optionItems: null,
    dataSource: {
        entityPluralName: 'notes',
        displayFieldName: 'description',
        valueFieldName: 'id',
        filter: [{
            fieldName: 'description',
            operator: 'eq',
            fieldValue: '111'
        },
        {
            fieldName: 'id',
            operator: 'eq',
            fieldValue: '4'
        }]
    }
};
let radioListField: BHRadioControlType =  {
    name: 'radioListField',
    displayName: 'radioListField',
    sequenceNumber: 6,
    type: formControlTypes.radioList,
    hidden: false,
    readonly: false,
    optionItems: null,
    dataSource: {
        entityPluralName: 'notes',
        displayFieldName: 'description',
        valueFieldName: 'id',
        filter: null
    }
};
let entityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
    idField,
    descriptionField,
    testField
    // checkBoxField,
    // numberField,
    // rangeField,
    // selectListField,
    // radioListField
];

export const entitySchema = [{
    name: "note",
    plural: "notes",
    properties: entityControls,
    form:{
        
    },
    list:{
        
    },
    grid:{
        paging: tableConfigs
    }
}]