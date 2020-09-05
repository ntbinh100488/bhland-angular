import { NgModule } from '@angular/core';

import { BhRadioControlComponent } from './bh-radio-control.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [BhRadioControlComponent],
  declarations: [ BhRadioControlComponent ]
})
export class BhRadioControlModule { }