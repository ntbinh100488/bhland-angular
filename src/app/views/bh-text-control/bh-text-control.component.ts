import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bh-text-control',
  templateUrl: './bh-text-control.component.html',
  styleUrls: ['./bh-text-control.component.css']
})
export class BhTextControlComponent implements OnInit {

    constructor() { }

    @Input() entitySchemaName: string;
    @Input() controlName: string;
    @Input() displayName: string;
    @Input() controlType: string;
    @Input() minLength: number;

    @Input() hasTouched: boolean;
    @Input() hasInvalid: boolean;
    @Input() hasRequiredError: boolean;
    @Input() hasMinLengthError: boolean;

    @Input() parentGroup: FormGroup;

    ngOnInit(): void {
    }

}
