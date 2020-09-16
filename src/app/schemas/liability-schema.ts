import { formControlTypes } from '../contants/form-control-types';
import { tableConfigs } from '../contants/table-configs';
import { BHBooleanControlType } from '../interfaces/boolean-control-type';
import { BHPreAppendControlType } from '../interfaces/pre-append-control-type';
import { BHSelectControlType } from '../interfaces/select-control-type';
import { BHTextControlType } from '../interfaces/text-control-type';
import { baseFields } from './base-fields';


let codeField: BHTextControlType =  {
    name: 'code',
    displayName: 'Mã công nợ',
    sequenceNumber: 2,
    type: formControlTypes.textBox,
    placeholder: 'code',
    required: false,
    hidden: false,
    readonly: true
};
let nameField: BHTextControlType =  {
    name: 'name',
    displayName: 'Tên công nợ',
    sequenceNumber: 3,
    type: formControlTypes.textBox,
    placeholder: 'Tên công nợ',
    required: true,
    hidden: false,
    readonly: false,
};
let valueField: BHPreAppendControlType =  {
    name: 'value',
    displayName: 'Giá trị công nợ',
    sequenceNumber: 4,
    type: formControlTypes.preappend,
    inputType: formControlTypes.number,
    placeholder: 'Giá trị công nợ',
    required: true,
    hidden: false,
    readonly: false,
    append: {
        text:'ngàn đồng'
    }
};
let detailField: BHTextControlType =  {
    name: 'detail',
    displayName: 'Chi tiết',
    sequenceNumber: 5,
    type: formControlTypes.textArea,
    placeholder: 'Chi tiết',
    required: true,
    hidden: false,
    readonly: false,
};

let liabilityStatusIdField: BHSelectControlType =  {
    name: 'liabilityStatusId',
    displayName: 'Tình trang công nợ',
    placeHolder: 'Please select an option',
    sequenceNumber: 6,
    type: formControlTypes.selectList,
    hidden: false,
    readonly: false,
    required: true,
    optionItems: null,
    dataSource: {
        entityPluralName: 'liabilitystatuses',
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
let liabilityTypeIdField: BHSelectControlType =  {
    name: 'liabilityTypeId',
    displayName: 'Loại công nợ',
    placeHolder: 'Please select an option',
    sequenceNumber: 7,
    type: formControlTypes.selectList,
    hidden: false,
    readonly: false,
    required: true,
    optionItems: null,
    dataSource: {
        entityPluralName: 'liabilitytypes',
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
let responsibleStaffField: BHSelectControlType =  {
    name: 'responsibleStaffId',
    displayName: 'Chịu trách nhiệm công nợ',
    placeHolder: 'Please select an option',
    sequenceNumber: 8,
    type: formControlTypes.selectList,
    hidden: false,
    readonly: false,
    required: true,
    optionItems: null,
    dataSource: {
        entityPluralName: 'staffs',
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

let liabilityEntityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
    baseFields.idField,
    codeField,
    nameField,
    valueField,
    detailField,
    liabilityStatusIdField,
    liabilityTypeIdField,
    responsibleStaffField
];

export const liabilitySchema = {
    name: "liability",
    plural: "liabilities",
    codePrefix: 'LBY',
    properties: liabilityEntityControls,
    form:{
    },
    list:{
    },
    grid:{
        paging: tableConfigs
    }
}