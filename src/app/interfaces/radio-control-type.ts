import { BHBaseControlType } from "./base-control-type";
import { BHSelectControlOptionItems, BHSelectControlDataSource } from './select-control-type';

export interface BHRadioControlType extends BHBaseControlType {  
    optionItems: BHSelectControlOptionItems[];
    dataSource: BHSelectControlDataSource;
}