import { NgModule } from '@angular/core';

import { BhTableControlComponent } from './bh-table-control.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [BhTableControlComponent],
  declarations: [ BhTableControlComponent ]
})
export class BhTableControlModule { }