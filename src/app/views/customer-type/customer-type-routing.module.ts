import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerTypeComponent } from './customer-type.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerTypeComponent,
    data: {
      title: 'Loại khách hàng'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerTypeRoutingModule {}
