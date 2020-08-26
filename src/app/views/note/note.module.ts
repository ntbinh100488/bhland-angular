import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { NoteComponent } from './note.component';
import { NoteRoutingModule } from './note-routing.module';

@NgModule({
  imports: [
    FormsModule,
    NoteRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ NoteComponent ]
})
export class NoteModule { }
