
import {formControlTypes} from '../contants/form-control-types';

let idField: BHTextControlType =  {
    name: 'id',
    displayName: 'Id',
    sequenceNumber: 0,
    type: formControlTypes.number,
    placeholder: 'Id',
    required: false,
    minLength: undefined,
    maxLength: undefined,
    hidden: false,
    readonly: false
};

let descriptionField: BHTextControlType =  {
    name: 'timeOnly',
    displayName: 'timeOnly',
    sequenceNumber: 1,
    type: formControlTypes.textArea,
    placeholder: 'timeOnly',
    required: true,
    minLength: 3,
    maxLength: 20,
    hidden: false,
    readonly: false
};

let checkBoxField: BHBooleanControlType =  {
    name: 'checkbox',
    displayName: 'checkbox',
    sequenceNumber: 1,
    type: formControlTypes.checkBox,
    hidden: false,
    readonly: false
};

let entityControls: (BHTextControlType|BHBooleanControlType)[] = [
    idField,
    descriptionField,
    checkBoxField
];

export const noteSchema = {
    name: "note",
    plural: "notes",
    properties: entityControls,
    form:{
        
    },
    list:{
        
    },
    grid:{

    }
}