export interface BHBaseControlType{
    name: string;
    displayName: string;
    sequenceNumber: number;
    type: string;
    hidden: boolean;
    readonly: boolean;
    style?: BhPropertyStyle;
}

interface BhPropertyStyle{
    grid?: BhPropertyGridStyle;
    form?: BhPropertyFormStyle;
}

interface BhPropertyGridStyle{
    header?:string;
    cell?:string;
}

interface BhPropertyFormStyle{
    label?: string;
    input?:string;
}