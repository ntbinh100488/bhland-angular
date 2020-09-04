import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bh-select-control',
  templateUrl: './bh-select-control.component.html',
  styleUrls: ['./bh-select-control.component.css']
})
export class BhSelectControlComponent implements OnInit {

    @Input() entitySchemaName: string;
    @Input() controlName: string;
    @Input() displayName: string;
    @Input() controlType: string;

    @Input() hasTouched: boolean;
    @Input() hasInvalid: boolean;
    @Input() parentGroup: FormGroup;
    @Input() controlReadonly: boolean;
    @Input() hasRequiredError: boolean;

    @Input() placeHolder: string;

    @Input() optionItems: BHSelectControlOptionItems[];

    optionData: BHSelectControlOptionItems[];

    constructor() { }

    ngOnInit(): void {
        if(this.optionItems) {
            this.optionData = this.optionItems;
        }
    }
}