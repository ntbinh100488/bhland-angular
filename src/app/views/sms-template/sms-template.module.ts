import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SmsTemplateComponent } from './sms-template.component';
import { SmsTemplateRoutingModule } from './sms-template-routing.module';
import { FormBuilderModule} from '../form-builder/form-builder.module';
import { FormBuilderRoutingModule} from '../form-builder/form-builder-routing.module';
import { BhTableControlModule } from '../bh-table-control/bh-table-control.module';
import { BhSelectControlModule } from '../bh-select-control/bh-select-control.module';
import { CommonModule } from '@angular/common';
import { BhTextControlModule } from '../bh-text-control/bh-text-control.module';

@NgModule({
imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    SmsTemplateRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormBuilderRoutingModule,
    FormBuilderModule,
    BhTableControlModule,
    BhSelectControlModule,
    BhTextControlModule,
    ButtonsModule.forRoot()
],
declarations: [ SmsTemplateComponent ]
})
export class SmsTemplateModule { }
