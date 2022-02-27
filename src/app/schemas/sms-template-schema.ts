import { formControlTypes } from '../contants/form-control-types';
import { tableConfigs } from '../contants/table-configs';
import { BHBooleanControlType } from '../interfaces/boolean-control-type';
import { BHSelectControlType } from '../interfaces/select-control-type';
import { BHTextControlType } from '../interfaces/text-control-type';
import { baseFields } from './base-fields';

let nameField: BHTextControlType =  {
    name: 'name',
    displayName: 'Tên mẫu',
    sequenceNumber: 2,
    type: formControlTypes.textBox,
    placeholder: 'Tên mẫu',
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
let contentField: BHTextControlType =  {
    name: 'content',
    displayName: 'Nội dung',
    sequenceNumber: 3,
    type: formControlTypes.textArea,
    placeholder: 'Nội dung',
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
// let customerGroupIdField: BHSelectControlType =  {
//     name: 'customerGroupId',
//     displayName: 'Nhóm khách hàng',
//     placeHolder: 'Please select an option',
//     sequenceNumber: 4,
//     type: formControlTypes.selectList,
//     hidden: false,
//     readonly: false,
//     required: true,
//     multiple: false,
//     optionItems: null,
//     dataSource: {
//         entityPluralName: 'customergroups',
//         displayFieldName: 'name',
//         valueFieldName: 'id',
//         filter: null
//     },
//     style:{
//         grid:{
//             header:"width-twohundred-pixel"
//         }
//     }
// };

let smsTemplateEntityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
    baseFields.idField,
    nameField,
    contentField,
    // customerGroupIdField
];

export const smsTemplateSchema = {
    name: "smstemplate",
    plural: "smstemplates",
    properties: smsTemplateEntityControls,
    form:{
    },
    list:{
    },
    grid:{
        paging: tableConfigs
    }
}