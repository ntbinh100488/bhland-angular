interface BHSelectControlType extends BHBaseControlType {  
    placeHolder: string;  
    required: boolean;  
    optionItems: BHSelectControlOptionItems[];
    dataSource: BHSelectControlDataSource;
}

interface BHSelectControlOptionItems{
    value: any;
    displayValue: string;
}

interface BHSelectControlDataSource{
    entityPluralName: string;
    displayFieldName: string;
    valueFieldName: string;
    filter: BHControlDataSourceFilter[];
}

interface BHControlDataSourceFilter{
    fieldName: string;
    operator: string;
    fieldValue: any;
}