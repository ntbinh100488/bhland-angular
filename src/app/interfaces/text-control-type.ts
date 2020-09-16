import { BHBaseControlType } from "./base-control-type";

export interface BHTextControlType extends BHBaseControlType {    
    placeholder: string;
    required: boolean;
    minLength?: number;
    maxLength?: number;
}
