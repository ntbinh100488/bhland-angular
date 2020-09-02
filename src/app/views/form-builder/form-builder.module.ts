import { NgModule } from '@angular/core';

import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [FormBuilderRoutingModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  exports: [FormBuilderComponent],
  declarations: [ FormBuilderComponent ]
})
export class FormBuilderModule { }