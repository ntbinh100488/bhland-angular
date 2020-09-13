import { NgModule } from '@angular/core';

import { BhPreappendControlComponent } from './bh-preappend-control.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [BhPreappendControlComponent],
    declarations: [ BhPreappendControlComponent ]
})
export class BhPreappendControlModule { }