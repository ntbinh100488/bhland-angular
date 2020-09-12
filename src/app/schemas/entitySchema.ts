
import { realestateSchema } from './realestate-schema';
import { staffSchema } from './staff-schema';
import { noteSchema } from './note-schema';

export const entitySchema = [
    noteSchema,
    staffSchema,
    realestateSchema
]

// let idField: BHTextControlType =  {
//     name: 'id',
//     displayName: 'Id',
//     sequenceNumber: 0,
//     type: formControlTypes.number,
//     placeholder: 'Id',
//     required: false,
//     minLength: undefined,
//     maxLength: undefined,
//     hidden: true,
//     readonly: false
// };
// let descriptionField: BHTextControlType =  {
//     name: 'description',
//     displayName: 'Description',
//     sequenceNumber: 2,
//     type: formControlTypes.textArea,
//     placeholder: 'descriptionField',
//     required: true,
//     minLength: 3,
//     maxLength: 512,
//     hidden: false,
//     readonly: false,
//     style:{
//         grid:{
//             cell:"truncate"
//         }
//     }
// };
// let staffIdField: BHSelectControlType =  {
//     name: 'staffId',
//     displayName: 'Staff',
//     placeHolder: 'Please select an option',
//     sequenceNumber: 1,
//     type: formControlTypes.selectList,
//     hidden: false,
//     readonly: false,
//     required: true,
//     optionItems: null,
//     dataSource: {
//         entityPluralName: 'staffs',
//         displayFieldName: 'name',
//         valueFieldName: 'id',
//         filter: null
//         // filter: [{
//         //     fieldName: 'description',
//         //     operator: 'eq',
//         //     fieldValue: '111'
//         // },
//         // {
//         //     fieldName: 'id',
//         //     operator: 'eq',
//         //     fieldValue: '4'
//         // }]
//     },
//     style:{
//         grid:{
//             header:"width-twohundred-pixel"
//         }
//     }
// };
// let nameField: BHTextControlType =  {
//     name: 'name',
//     displayName: 'Name',
//     sequenceNumber: 1,
//     type: formControlTypes.textBox,
//     placeholder: 'Name',
//     required: true,
//     minLength: 3,
//     maxLength: 100,
//     hidden: false,
//     readonly: false
// };
// let checkBoxField: BHBooleanControlType =  {
//     name: 'checkbox',
//     displayName: 'checkbox',
//     sequenceNumber: 2,
//     type: formControlTypes.checkBox,
//     hidden: false,
//     readonly: false
// };
// let numberField: BHNumberControlType =  {
//     name: 'number',
//     displayName: 'number',
//     sequenceNumber: 3,
//     type: formControlTypes.number,
//     hidden: false,
//     readonly: false,
//     stepValue:1,
//     minValue:0,
//     maxValue: 10,
//     required: true
// };
// let rangeField: BHNumberControlType =  {
//     name: 'rangeField',
//     displayName: 'rangeField',
//     sequenceNumber: 4,
//     type: formControlTypes.rangeNumber,
//     hidden: false,
//     readonly: false,
//     stepValue:1,
//     minValue:0,
//     maxValue: 10,
//     required: true
// };
// let selectListField: BHSelectControlType =  {
//     name: 'selectListField',
//     displayName: 'selectListField',
//     placeHolder: 'Please select an option',
//     sequenceNumber: 5,
//     type: formControlTypes.selectList,
//     hidden: false,
//     readonly: false,
//     required: true,
//     optionItems: null,
//     dataSource: {
//         entityPluralName: 'notes',
//         displayFieldName: 'description',
//         valueFieldName: 'id',
//         filter: [{
//             fieldName: 'description',
//             operator: 'eq',
//             fieldValue: '111'
//         },
//         {
//             fieldName: 'id',
//             operator: 'eq',
//             fieldValue: '4'
//         }]
//     }
// };
// let radioListField: BHRadioControlType =  {
//     name: 'radioListField',
//     displayName: 'radioListField',
//     sequenceNumber: 6,
//     type: formControlTypes.radioList,
//     hidden: false,
//     readonly: false,
//     optionItems: null,
//     dataSource: {
//         entityPluralName: 'notes',
//         displayFieldName: 'description',
//         valueFieldName: 'id',
//         filter: null
//     }
// };
// let noteEntityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
//     idField,
//     staffIdField,
//     descriptionField
//     // checkBoxField,
//     // numberField,
//     // rangeField,
//     // selectListField,
//     // radioListField
// ];
// let staffEntityControls: (BHTextControlType|BHBooleanControlType|BHSelectControlType)[] = [
//     idField,
//     nameField
// ];

