import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Trang chủ'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'note',
        loadChildren: () => import('./views/note/note.module').then(m => m.NoteModule)
      },
      {
        path: 'realestate',
        loadChildren: () => import('./views/real-estate/real-estate.module').then(m => m.RealEstateModule)
      },
      {
        path: 'staff',
        loadChildren: () => import('./views/staff/staff.module').then(m => m.StaffModule)
      },
      {
        path: 'liability',
        loadChildren: () => import('./views/liability/liability.module').then(m => m.LiabilityModule)
      },
      {
        path: 'customertype',
        loadChildren: () => import('./views/customer-type/customer-type.module').then(m => m.CustomerTypeModule)
      },
      {
        path: 'customerbudget',
        loadChildren: () => import('./views/customer-budget/customer-budget.module').then(m => m.CustomerBudgetModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./views/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'customergroup',
        loadChildren: () => import('./views/customer-group/customer-group.module').then(m => m.CustomerGroupModule)
      },
      {
        path: 'smstemplate',
        loadChildren: () => import('./views/sms-template/sms-template.module').then(m => m.SmsTemplateModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
