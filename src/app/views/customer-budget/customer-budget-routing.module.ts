import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerBudgetComponent } from './customer-budget.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerBudgetComponent,
    data: {
      title: 'Loại khách hàng'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerBudgetRoutingModule {}
