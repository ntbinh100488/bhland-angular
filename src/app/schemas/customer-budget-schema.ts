import { formControlTypes } from '../contants/form-control-types';
import { tableConfigs } from '../contants/table-configs';
import { BHBooleanControlType } from '../interfaces/boolean-control-type';
import { BHSelectControlType } from '../interfaces/select-control-type';
import { BHTextControlType } from '../interfaces/text-control-type';
import { baseFields } from './base-fields';

let nameField: BHTextControlType =  {
    name: 'name',
    displayName: 'Tên ngân sách',
    sequenceNumber: 1,
    type: formControlTypes.textBox,
    placeholder: 'Tên ngân sách',
    required: true,
    minLength: 3,
    maxLength: 100,
    hidden: false,
    readonly: false
};

let customerBudgetEntityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
    baseFields.idField,
    nameField
];

export const customerBudgetSchema = {
    name: "customerbudget",
    plural: "customerbudgets",
    properties: customerBudgetEntityControls,
    form:{
    },
    list:{
    },
    grid:{
        paging: tableConfigs
    }
}