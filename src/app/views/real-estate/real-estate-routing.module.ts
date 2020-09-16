import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealEstateComponent } from './real-estate.component';

const routes: Routes = [
{
    path: '',
    component: RealEstateComponent,
    data: {
    title: 'Bất động sản'
    }
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RealEstateRoutingModule {}
