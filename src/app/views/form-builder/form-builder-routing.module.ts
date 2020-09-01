import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormBuilderComponent } from './form-builder.component';

const routes: Routes = [
  {
    path: '',
    component: FormBuilderComponent,
    data: {
      title: 'Form builder'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule {}
