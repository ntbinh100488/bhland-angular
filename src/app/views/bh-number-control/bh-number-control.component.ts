import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bh-number-control',
  templateUrl: './bh-number-control.component.html',
  styleUrls: ['./bh-number-control.component.css']
})
export class BhNumberControlComponent implements OnInit {

    @Input() entitySchemaName: string;
    @Input() controlName: string;
    @Input() displayName: string;
    @Input() controlType: string;

    @Input() hasTouched: boolean;
    @Input() hasInvalid: boolean;
    @Input() controlReadonly: boolean;

    @Input() minValue: number;
    @Input() maxValue: number;
    @Input() stepValue: number;
    @Input() hasRequiredError: boolean;
    @Input() hasMinValueError: boolean;
    @Input() hasMaxValueError: boolean;

    @Input() parentGroup: FormGroup;

    constructor() { }

    ngOnInit(): void {
    }

}
