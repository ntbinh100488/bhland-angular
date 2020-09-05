
import {formControlTypes} from '../contants/form-control-types';

let idField: BHTextControlType =  {
    name: 'id',
    displayName: 'Id',
    sequenceNumber: 0,
    type: formControlTypes.number,
    placeholder: 'Id',
    required: false,
    minLength: undefined,
    maxLength: undefined,
    hidden: false,
    readonly: false
};
let descriptionField: BHTextControlType =  {
    name: 'timeOnly',
    displayName: 'timeOnly',
    sequenceNumber: 1,
    type: formControlTypes.textArea,
    placeholder: 'timeOnly',
    required: true,
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
    checkBoxField,
    numberField,
    rangeField,
    selectListField,
    radioListField
];

export const noteSchema = {
    name: "note",
    plural: "notes",
    properties: entityControls,
    form:{
        
    },
    list:{
        
    },
    grid:{

    }
}