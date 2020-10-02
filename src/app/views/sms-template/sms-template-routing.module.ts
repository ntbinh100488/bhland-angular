import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmsTemplateComponent } from './sms-template.component';

const routes: Routes = [
{
    path: '',
    component: SmsTemplateComponent,
    data: {
    title: 'Mẫu tin nhắn'
    }
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SmsTemplateRoutingModule {}
