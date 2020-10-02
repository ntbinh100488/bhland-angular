import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerGroupComponent } from './customer-group.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerGroupComponent,
    data: {
      title: 'Nhóm khách hàng'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerGroupRoutingModule {}
