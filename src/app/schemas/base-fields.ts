import { formControlTypes } from '../contants/form-control-types';
import { BHTextControlType } from "../interfaces/text-control-type";

let idField: BHTextControlType =  {
    name: 'id',
    displayName: 'Id',
    sequenceNumber: 0,
    type: formControlTypes.number,
    placeholder: 'Id',
    required: false,
    minLength: undefined,
    maxLength: undefined,
    hidden: true,
    readonly: false
};

export const baseFields = {
    idField: idField
}