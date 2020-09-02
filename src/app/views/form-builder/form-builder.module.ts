import { NgModule } from '@angular/core';

import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [FormBuilderRoutingModule, FormsModule, ReactiveFormsModule, CommonModule],
  exports: [FormBuilderComponent],
  declarations: [ FormBuilderComponent ]
})
export class FormBuilderModule { }