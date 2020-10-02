import { formControlTypes } from '../contants/form-control-types';
import { tableConfigs } from '../contants/table-configs';
import { BHBooleanControlType } from '../interfaces/boolean-control-type';
import { BHSelectControlType } from '../interfaces/select-control-type';
import { BHTextControlType } from '../interfaces/text-control-type';
import { baseFields } from './base-fields';

let nameField: BHTextControlType =  {
    name: 'name',
    displayName: 'Tên nhóm',
    sequenceNumber: 1,
    type: formControlTypes.textBox,
    placeholder: 'Tên nhóm',
    required: true,
    minLength: 3,
    maxLength: 100,
    hidden: false,
    readonly: false
};

let customerIdsField: BHSelectControlType =  {
    name: 'customerIds',
    displayName: 'Danh sách khách hàng',
    placeHolder: 'Please select an option',
    sequenceNumber: 2,
    type: formControlTypes.selectList,
    multiple: true,
    hidden: false,
    readonly: false,
    required: true,
    optionItems: null,
    dataSource: {
        entityPluralName: 'customers',
        displayFieldName: 'firstName',
        valueFieldName: 'id',
        filter: null
    },
    style:{
        grid:{
            header:"width-twohundred-pixel"
        }
    }
};

let customerGroupEntityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
    baseFields.idField,
    nameField,
    customerIdsField,
];

const nomalizeDataCustomerIds = (data:any) => {
    console.log(data);
}

export const customerGroupSchema = {
    name: "customergroup",
    plural: "customergroups",
    properties: customerGroupEntityControls,
    form:{},
    list:{
    },
    grid:{
        paging: tableConfigs,
        nomalizeData:{
            customerIds: (data:any) => {
                console.log(data);
            }
        }
    }
}