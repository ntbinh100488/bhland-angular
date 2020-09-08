import { NgModule } from '@angular/core';

import { BhTableControlComponent } from './bh-table-control.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderModule } from '../form-builder/form-builder.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormBuilderModule],
  exports: [BhTableControlComponent],
  declarations: [ BhTableControlComponent ]
})
export class BhTableControlModule { }