import { formControlTypes } from '../contants/form-control-types';
import { tableConfigs } from '../contants/table-configs';
import { BHBooleanControlType } from '../interfaces/boolean-control-type';
import { BHNumberControlType } from '../interfaces/number-control-type';
import { BHSelectControlType } from '../interfaces/select-control-type';
import { BHTextControlType } from '../interfaces/text-control-type';
import { baseFields } from './base-fields';

let firstNameField: BHTextControlType =  {
    name: 'firstName',
    displayName: 'Tên',
    sequenceNumber: 1,
    type: formControlTypes.textBox,
    placeholder: 'Tên',
    required: true,
    minLength: 3,
    maxLength: 100,
    hidden: false,
    readonly: false
};

let lastNameField: BHTextControlType =  {
    name: 'lastName',
    displayName: 'Họ',
    sequenceNumber: 2,
    type: formControlTypes.textBox,
    placeholder: 'Tên',
    required: true,
    minLength: 3,
    maxLength: 100,
    hidden: false,
    readonly: false
};

let addressField: BHTextControlType =  {
    name: 'address',
    displayName: 'Địa chỉ',
    sequenceNumber: 3,
    type: formControlTypes.textArea,
    placeholder: 'Địa chỉ',
    required: false,
    minLength: 3,
    maxLength: 100,
    hidden: false,
    readonly: false
};

let dobField: BHTextControlType =  {
    name: 'dob',
    displayName: 'Ngày sinh',
    sequenceNumber: 4,
    type: formControlTypes.dateOnly,
    placeholder: 'Ngày sinh',
    required: false,
    minLength: 3,
    maxLength: 100,
    hidden: false,
    readonly: false
};

let phoneNumberField: BHNumberControlType =  {
    name: 'phoneNumber',
    displayName: 'Số điện thoại',
    sequenceNumber: 5,
    type: formControlTypes.number,
    required: true,
    hidden: false,
    readonly: false,
    stepValue: 1
};

let emailField: BHTextControlType =  {
    name: 'email',
    displayName: 'Email',
    sequenceNumber: 6,
    type: formControlTypes.textBox,
    placeholder: 'Email',
    required: false,
    minLength: 3,
    maxLength: 100,
    hidden: false,
    readonly: false
};

let customerTypeIdField: BHSelectControlType =  {
    name: 'customerTypeId',
    displayName: 'Loại khách hàng',
    placeHolder: 'Please select an option',
    sequenceNumber: 7,
    type: formControlTypes.selectList,
    hidden: false,
    readonly: false,
    required: true,
    optionItems: null,
    dataSource: {
        entityPluralName: 'customertypes',
        displayFieldName: 'name',
        valueFieldName: 'id',
        filter: null
    },
    style:{
        grid:{
            header:"width-twohundred-pixel"
        }
    }
};

let customerBudgetIdField: BHSelectControlType =  {
    name: 'customerBudgetId',
    displayName: 'Ngân sách',
    placeHolder: 'Please select an option',
    sequenceNumber: 8,
    type: formControlTypes.selectList,
    hidden: false,
    readonly: false,
    required: true,
    optionItems: null,
    dataSource: {
        entityPluralName: 'customerbudgets',
        displayFieldName: 'name',
        valueFieldName: 'id',
        filter: null
    },
    style:{
        grid:{
            header:"width-twohundred-pixel"
        }
    }
};

let customerEntityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
    baseFields.idField,
    firstNameField,
    lastNameField,
    addressField,
    dobField,
    phoneNumberField,
    emailField,
    customerTypeIdField,
    customerBudgetIdField
];

export const customerSchema = {
    name: "customer",
    plural: "customers",
    properties: customerEntityControls,
    form:{
    },
    list:{
    },
    grid:{
        paging: tableConfigs
    }
}