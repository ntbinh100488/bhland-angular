import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { FormBuilderModule} from '../form-builder/form-builder.module';
import { FormBuilderRoutingModule} from '../form-builder/form-builder-routing.module';
import { BhTableControlModule } from '../bh-table-control/bh-table-control.module';

@NgModule({
  imports: [
    FormsModule,
    CustomerRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FormBuilderRoutingModule,
    FormBuilderModule,
    BhTableControlModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ CustomerComponent ]
})
export class CustomerModule { }
