import { NgModule } from '@angular/core';

import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BhTextControlModule} from '../bh-text-control/bh-text-control.module'
import { BhCheckboxControlModule } from '../bh-checkbox-control/bh-checkbox-control.module'
import { BhNumberControlModule } from '../bh-number-control/bh-number-control.module'
import { BhSelectControlModule } from '../bh-select-control/bh-select-control.module'

@NgModule({
  imports: [
    FormBuilderRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    CommonModule, 
    HttpClientModule, 
    BhTextControlModule, 
    BhCheckboxControlModule,
    BhNumberControlModule,
    BhSelectControlModule
],
  exports: [FormBuilderComponent],
  declarations: [ FormBuilderComponent ]
})
export class FormBuilderModule { }