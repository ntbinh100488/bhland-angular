export interface BHBaseControlType{
    name: string;
    displayName: string;
    sequenceNumber: number;
    type: string;
    hidden: boolean;
    readonly: boolean;
    style?: BhPropertyStyle;
    events?: BHControlEvent;
}

interface BhPropertyStyle{
    grid?: BhPropertyGridStyle;
    form?: BhPropertyFormStyle;
}

export interface BHControlEvent{
    hasChangeEvent: boolean;
}

interface BhPropertyGridStyle{
    header?:string;
    column?:string;
    cell?:string;
}

interface BhPropertyFormStyle{
    label?: string;
    input?:string;
}