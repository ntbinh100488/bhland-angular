export const noteSchema = {
    name: "note",
    plural: "notes",
    properties:[
        {
            name: 'id',
            displayName: 'Id',
            sequenceNumber: 0,
            type: "number",
            placeholder: 'Id',
            required: false,
            minLength: undefined,
            isHidden: true
        },
        {
            name: 'description',
            displayName: 'Description',
            sequenceNumber: 1,
            type: "text",
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