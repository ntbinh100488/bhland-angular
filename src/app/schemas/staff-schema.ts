import { formControlTypes } from '../contants/form-control-types';
import { tableConfigs } from '../contants/table-configs';
import { BHBooleanControlType } from '../interfaces/boolean-control-type';
import { BHSelectControlType } from '../interfaces/select-control-type';
import { BHTextControlType } from '../interfaces/text-control-type';
import { baseFields } from './base-fields';

let nameField: BHTextControlType =  {
    name: 'name',
    displayName: 'Name',
    sequenceNumber: 1,
    type: formControlTypes.textBox,
    placeholder: 'Name',
    required: true,
    minLength: 3,
    maxLength: 100,
    hidden: false,
    readonly: false
};

let staffEntityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
    baseFields.idField,
    nameField
];

export const staffSchema = {
    name: "staff",
    plural: "staffs",
    properties: staffEntityControls,
    form:{
    },
    list:{
    },
    grid:{
        paging: tableConfigs
    }
}