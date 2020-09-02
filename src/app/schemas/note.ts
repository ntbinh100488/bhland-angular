import {formControlTypes} from '../contants/form-control-types';

export const noteSchema = {
    name: "note",
    plural: "notes",
    properties:[
        {
            name: 'id',
            displayName: 'Id',
            sequenceNumber: 0,
            type: formControlTypes.number,
            placeholder: 'Id',
            required: false,
            minLength: undefined,
            isHidden: false
        },
        {
            name: 'description',
            displayName: 'Description',
            sequenceNumber: 1,
            type: formControlTypes.email,
            placeholder: 'Description',
            required: true,
            minLength: 3,
            isHidden: false
        }
    ],
    form:{
        
    },
    list:{

    },
    grid:{

    }
}