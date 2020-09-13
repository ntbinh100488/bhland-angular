import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BHPreAppendControl } from '../../interfaces/pre-append-control-type';

@Component({
    selector: 'app-bh-preappend-control',
    templateUrl: './bh-preappend-control.component.html',
    styleUrls: ['./bh-preappend-control.component.css']
})
export class BhPreappendControlComponent implements OnInit {

    constructor() { }

    @Input() entitySchemaName: string;
    @Input() controlName: string;
    @Input() displayName: string;
    @Input() controlType: string;
    @Input() required: boolean;

    @Input() hasTouched: boolean;
    @Input() hasInvalid: boolean;
    @Input() hasRequiredError: boolean;
    @Input() controlReadonly: boolean;

    @Input() parentGroup: FormGroup;

    @Input() prepend: BHPreAppendControl;
    @Input() append: BHPreAppendControl;
    @Input() inputType: string;

    ngOnInit(): void {
    }
}