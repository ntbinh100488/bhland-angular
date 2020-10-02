import { NgModule } from '@angular/core';

import { BhCardComponent } from './bh-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonsModule.forRoot()],
  exports: [BhCardComponent],
  declarations: [ BhCardComponent ]
})
export class BhCardModule { }