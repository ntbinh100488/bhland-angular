import { formControlTypes } from '../contants/form-control-types';
import { tableConfigs } from '../contants/table-configs';
import { BHBooleanControlType } from '../interfaces/boolean-control-type';
import { BHNumberControlType } from '../interfaces/number-control-type';
import { BHPreAppendControl, BHPreAppendControlType } from '../interfaces/pre-append-control-type';
import { BHSelectControlType } from '../interfaces/select-control-type';
import { BHTextControlType } from '../interfaces/text-control-type';
import { baseFields } from './base-fields';

let codeField: BHTextControlType =  {
    name: 'code',
    displayName: 'Mã BĐS',
    sequenceNumber: 1,
    type: formControlTypes.textBox,
    placeholder: 'Mã BĐS',
    required: false,
    minLength: undefined,
    maxLength: undefined,
    hidden: false,
    readonly: true
}

let detailOneField: BHTextControlType =  {
    name: 'detailOne',
    displayName: 'Chi tiết',
    sequenceNumber: 2,
    type: formControlTypes.textArea,
    placeholder: 'Chi tiết',
    required: false,
    minLength: undefined,
    maxLength: undefined,
    hidden: false,
    readonly: false,
    style:{
        grid:{
            header:'bh-hide',
            column:'bh-hide'
        }
    }
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
    hidden: true,
    readonly: false
}

let areaField: BHPreAppendControlType =  {
    name: 'area',
    displayName: 'Diện tích',
    sequenceNumber: 7,
    type: formControlTypes.preappend,
    inputType: formControlTypes.number,
    required: false,
    hidden: false,
    readonly: false,
    placeholder: 'Diện tích',
    append: {
        text:'m2'
    }
}

let widthField: BHPreAppendControlType =  {
    name: 'width',
    displayName: 'Chiều rộng',
    sequenceNumber: 8,
    type: formControlTypes.preappend,
    inputType: formControlTypes.number,
    required: false,
    hidden: false,
    readonly: false,
    placeholder: 'Diện tích',
    append: {
        text:'m2'
    }
}

let lengthField: BHPreAppendControlType =  {
    name: 'length',
    displayName: 'Chiều dài',
    sequenceNumber: 9,
    type: formControlTypes.preappend,
    inputType: formControlTypes.number,
    required: false,
    hidden: false,
    readonly: false,
    placeholder: 'Diện tích',
    append: {
        text:'m2'
    }
}

let valueField: BHPreAppendControlType =  {
    name: 'value',
    displayName: 'Giá trị',
    sequenceNumber: 10,
    type: formControlTypes.preappend,
    inputType: formControlTypes.number,
    required: false,
    hidden: false,
    readonly: false,
    placeholder: 'Giá trị',
    append: {
        text: 'triệu đồng'
    }
}

let cityIdField: BHSelectControlType =  {
    name: 'cityId',
    displayName: 'Tỉnh/Thành phố',
    placeHolder: 'Please select an option',
    sequenceNumber: 4,
    type: formControlTypes.selectList,
    hidden: false,
    readonly: false,
    required: true,
    optionItems: null,
    dataSource: {
        entityPluralName: 'cities',
        displayFieldName: 'name',
        valueFieldName: 'id',
        filter: null
    },
    style:{
        grid:{
            header:"width-twohundred-pixel"
        }
    },
    events:{
        hasChangeEvent: true
    }
};

let districtIdField: BHSelectControlType =  {
    name: 'districtId',
    displayName: 'Quận/Huyện',
    placeHolder: 'Please select an option',
    sequenceNumber: 5,
    type: formControlTypes.selectList,
    hidden: false,
    readonly: false,
    required: true,
    optionItems: null,
    dataSource: {
        entityPluralName: 'districts',
        displayFieldName: 'name',
        valueFieldName: 'id',
        filter: null
    },
    style:{
        grid:{
            header:"width-twohundred-pixel"
        }
    },
    events:{
        hasChangeEvent: true
    }
};

let wardIdField: BHSelectControlType =  {
    name: 'wardId',
    displayName: 'Phườg/Xã',
    placeHolder: 'Please select an option',
    sequenceNumber: 6,
    type: formControlTypes.selectList,
    hidden: false,
    readonly: false,
    required: true,
    optionItems: null,
    dataSource: {
        entityPluralName: 'wards',
        displayFieldName: 'name',
        valueFieldName: 'id',
        filter: null
    },
    style:{
        grid:{
            header:"width-twohundred-pixel"
        }
    },
    events:{
        hasChangeEvent: true
    }
};

let realEstateEntityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
    baseFields.idField,
    codeField,
    detailOneField,
    detailTwoField,
    areaField,
    widthField,
    lengthField,
    valueField,
    cityIdField,
    districtIdField,
    wardIdField
];

export const realestateSchema = {
    name: "realestate",
    plural: "realestates",
    codePrefix: 'RLE',
    properties: realEstateEntityControls,
    form:{
    },
    list:{
    },
    grid:{
        paging: tableConfigs
    }
}