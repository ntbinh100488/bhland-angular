import { NgModule } from '@angular/core';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';

@NgModule({
  imports: [HeroDetailRoutingModule],
  exports: [HeroDetailComponent],
  declarations: [ HeroDetailComponent ]
})
export class HeroDetailModule { }