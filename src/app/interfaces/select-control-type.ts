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
    entityName: string;
    displayFieldName: string;
    valueFieldName: string;
    filter: any;
}