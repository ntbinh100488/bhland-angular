import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiabilityComponent } from './liability.component';

const routes: Routes = [
  {
    path: '',
    component: LiabilityComponent,
    data: {
      title: 'Công nợ'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiabilityRoutingModule {}
