import { BHBaseControlType } from "./base-control-type";

export interface BHSelectControlType extends BHBaseControlType {  
    placeHolder: string;  
    required: boolean;  
    multiple: boolean;
    optionItems: BHSelectControlOptionItems[];
    dataSource: BHSelectControlDataSource;
}

export interface BHSelectControlOptionItems{
    value: any;
    displayValue: string;
}

export interface BHSelectControlDataSource{
    entityPluralName: string;
    displayFieldName: string;
    valueFieldName: string;
    filter: BHControlDataSourceFilter[];
}

export interface BHControlDataSourceFilter{
    fieldName: string;
    operator: string;
    fieldValue: any;
}

export interface BHControlDataSourcePaging{
    skip: number;
    limit: number;
}