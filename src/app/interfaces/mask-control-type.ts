// Email

import { BHBaseControlType } from "./base-control-type";

// Tel
export interface BHMaskControlType extends BHBaseControlType {    
    placeholder: string;
    required: boolean;
    pattern: string;
}
