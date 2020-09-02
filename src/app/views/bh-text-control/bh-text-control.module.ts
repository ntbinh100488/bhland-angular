import { NgModule } from '@angular/core';

import { BhTextControlComponent } from './bh-text-control.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [BhTextControlComponent],
  declarations: [ BhTextControlComponent ]
})
export class BhTextControlModule { }