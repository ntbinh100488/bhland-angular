import { NgModule } from '@angular/core';

import { BhNumberControlComponent } from './bh-number-control.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [BhNumberControlComponent],
  declarations: [ BhNumberControlComponent ]
})
export class BhNumberControlModule { }