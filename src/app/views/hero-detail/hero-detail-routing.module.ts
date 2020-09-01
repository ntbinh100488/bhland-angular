import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HeroDetailComponent,
    data: {
      title: 'Hero Detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroDetailRoutingModule {}
