import { BHBaseControlType } from "./base-control-type";

export interface BHNumberControlType extends BHBaseControlType {    
    required: boolean;
    stepValue: number;
    minValue?: number;
    maxValue?: number;
}
