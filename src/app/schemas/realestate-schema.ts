import { formControlTypes } from '../contants/form-control-types';
import { tableConfigs } from '../contants/table-configs';
import { BHBooleanControlType } from '../interfaces/boolean-control-type';
import { BHNumberControlType } from '../interfaces/number-control-type';
import { BHSelectControlType } from '../interfaces/select-control-type';
import { BHTextControlType } from '../interfaces/text-control-type';
import { baseFields } from './base-fields';

let codeField: BHTextControlType =  {
    name: 'code',
    displayName: 'Code',
    sequenceNumber: 1,
    type: formControlTypes.textBox,
    placeholder: 'Code',
    required: false,
    minLength: undefined,
    maxLength: undefined,
    hidden: false,
    readonly: true
}

let detailOneField: BHTextControlType =  {
    name: 'detailOne',
    displayName: 'Detail One',
    sequenceNumber: 2,
    type: formControlTypes.textArea,
    placeholder: 'Detail One',
    required: false,
    minLength: undefined,
    maxLength: undefined,
    hidden: false,
    readonly: false
}

let detailTwoField: BHTextControlType =  {
    name: 'detailTwo',
    displayName: 'Detail Two',
    sequenceNumber: 3,
    type: formControlTypes.textArea,
    placeholder: 'Detail Two',
    required: false,
    minLength: undefined,
    maxLength: undefined,
    hidden: false,
    readonly: false
}

let areaField: BHNumberControlType =  {
    name: 'area',
    displayName: 'Area',
    sequenceNumber: 4,
    type: formControlTypes.number,
    required: false,
    hidden: false,
    readonly: false,
    minValue: 1,
    maxValue: 100000,
    stepValue: 1
}

let widthField: BHNumberControlType =  {
    name: 'width',
    displayName: 'Width',
    sequenceNumber: 5,
    type: formControlTypes.number,
    required: false,
    hidden: false,
    readonly: false,
    minValue: 1,
    maxValue: 100000,
    stepValue: 1
}

let lengthField: BHNumberControlType =  {
    name: 'length',
    displayName: 'Length',
    sequenceNumber: 6,
    type: formControlTypes.number,
    required: false,
    hidden: false,
    readonly: false,
    minValue: 1,
    maxValue: 100000,
    stepValue: 1
}

let valueField: BHNumberControlType =  {
    name: 'value',
    displayName: 'Value',
    sequenceNumber: 7,
    type: formControlTypes.number,
    required: false,
    hidden: false,
    readonly: false,
    minValue: 1,
    maxValue: 100000,
    stepValue: 1
}

let realEstateEntityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
    baseFields.idField,
    codeField,
    detailOneField,
    detailTwoField,
    areaField,
    widthField,
    lengthField,
    valueField
];

export const realestateSchema = {
    name: "realestate",
    plural: "realestates",
    properties: realEstateEntityControls,
    form:{
    },
    list:{
    },
    grid:{
        paging: tableConfigs
    }
}