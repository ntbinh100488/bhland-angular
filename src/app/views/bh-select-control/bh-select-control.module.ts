import { NgModule } from '@angular/core';

import { BhSelectControlComponent } from './bh-select-control.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [BhSelectControlComponent],
  declarations: [ BhSelectControlComponent ]
})
export class BhSelectControlModule { }