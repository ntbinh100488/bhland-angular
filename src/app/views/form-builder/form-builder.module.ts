import { NgModule } from '@angular/core';

import { FormBuilderComponent } from './form-builder.component';
import { FormBuilderRoutingModule } from './form-builder-routing.module';

@NgModule({
  imports: [FormBuilderRoutingModule],
  exports: [FormBuilderComponent],
  declarations: [ FormBuilderComponent ]
})
export class FormBuilderModule { }