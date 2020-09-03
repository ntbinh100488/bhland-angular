
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
    readonly: true
};

let descriptionField: BHTextControlType =  {
    name: 'timeOnly',
    displayName: 'timeOnly',
    sequenceNumber: 1,
    type: formControlTypes.timeOnly,
    placeholder: 'timeOnly',
    required: true,
    minLength: 3,
    maxLength: 20,
    hidden: false,
    readonly: true
};

export const noteSchema = {
    name: "note",
    plural: "notes",
    properties:[
        idField,
        descriptionField
    ],
    form:{
        
    },
    list:{

    },
    grid:{

    }
}