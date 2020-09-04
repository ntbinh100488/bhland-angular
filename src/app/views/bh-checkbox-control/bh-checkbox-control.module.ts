import { NgModule } from '@angular/core';

import { BhCheckboxControlComponent } from './bh-checkbox-control.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [BhCheckboxControlComponent],
  declarations: [ BhCheckboxControlComponent ]
})
export class BhCheckboxControlModule { }