import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiabilityComponent } from './liability.component';

const routes: Routes = [
  {
    path: '',
    component: LiabilityComponent,
    data: {
      title: 'Liability'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiabilityRoutingModule {}
