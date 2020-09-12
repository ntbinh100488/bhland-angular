import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealEstateComponent } from './real-estate.component';

const routes: Routes = [
{
    path: '',
    component: RealEstateComponent,
    data: {
    title: 'Real Estate'
    }
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RealEstateRoutingModule {}
