import { NgModule } from '@angular/core';

import { BhGoogleMapComponent } from './bh-google-map.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [CommonModule, FormsModule, AgmCoreModule.forRoot({
    apiKey: ''
  })
],
  exports: [BhGoogleMapComponent],
  declarations: [ BhGoogleMapComponent ]
})
export class BhGoogleMapModule { }