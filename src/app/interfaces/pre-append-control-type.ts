import { BHBaseControlType } from "./base-control-type";

// Tel
export interface BHPreAppendControlType extends BHBaseControlType {    
    placeholder: string;
    required: boolean;
    inputType: string;
    prepend?: BHPreAppendControl
    append?: BHPreAppendControl
}

export interface BHPreAppendControl{
    icon?: string;
    text?: string;
}
