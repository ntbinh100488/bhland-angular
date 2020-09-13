import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bh-checkbox-control',
  templateUrl: './bh-checkbox-control.component.html',
  styleUrls: ['./bh-checkbox-control.component.css']
})
export class BhCheckboxControlComponent implements OnInit {

    @Input() entitySchemaName: string;
    @Input() controlName: string;
    @Input() displayName: string;
    @Input() controlType: string;
    @Input() required: boolean;

    @Input() hasTouched: boolean;
    @Input() hasInvalid: boolean;
    @Input() controlReadonly: boolean;

    @Input() parentGroup: FormGroup;
    
    constructor() { }

    ngOnInit(): void {
    }

}