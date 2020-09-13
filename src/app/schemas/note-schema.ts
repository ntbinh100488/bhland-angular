import { formControlTypes } from '../contants/form-control-types';
import { tableConfigs } from '../contants/table-configs';
import { BHBooleanControlType } from '../interfaces/boolean-control-type';
import { BHSelectControlType } from '../interfaces/select-control-type';
import { BHTextControlType } from '../interfaces/text-control-type';
import { baseFields } from './base-fields';

let descriptionField: BHTextControlType =  {
    name: 'description',
    displayName: 'Ghi chú',
    sequenceNumber: 2,
    type: formControlTypes.textArea,
    placeholder: 'Nội dung ghi chú',
    required: true,
    minLength: 3,
    maxLength: 512,
    hidden: false,
    readonly: false,
    style:{
        grid:{
            cell:"truncate"
        }
    }
};
let staffIdField: BHSelectControlType =  {
    name: 'staffId',
    displayName: 'Nhân viên',
    placeHolder: 'Please select an option',
    sequenceNumber: 1,
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
        // filter: [{
        //     fieldName: 'description',
        //     operator: 'eq',
        //     fieldValue: '111'
        // },
        // {
        //     fieldName: 'id',
        //     operator: 'eq',
        //     fieldValue: '4'
        // }]
    },
    style:{
        grid:{
            header:"width-twohundred-pixel"
        }
    }
};

let noteEntityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
    baseFields.idField,
    staffIdField,
    descriptionField
];

export const noteSchema = {
    name: "note",
    plural: "notes",
    properties: noteEntityControls,
    form:{
    },
    list:{
    },
    grid:{
        paging: tableConfigs
    }
}