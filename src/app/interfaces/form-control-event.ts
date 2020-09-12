import { FormGroup } from '@angular/forms';

export interface BHFormControlEvent{
    entityType: string;
    controlName: string;
    eventName: string;
    value: any;
}