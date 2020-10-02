import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SmsTemplateComponent } from './sms-template.component';
import { SmsTemplateRoutingModule } from './sms-template-routing.module';
import { FormBuilderModule} from '../form-builder/form-builder.module';
import { FormBuilderRoutingModule} from '../form-builder/form-builder-routing.module';
import { BhTableControlModule } from '../bh-table-control/bh-table-control.module';

@NgModule({
imports: [
    FormsModule,
    SmsTemplateRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormBuilderRoutingModule,
    FormBuilderModule,
    BhTableControlModule,
    ButtonsModule.forRoot()
],
declarations: [ SmsTemplateComponent ]
})
export class SmsTemplateModule { }
