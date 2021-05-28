import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';



const routes: Routes = [
  {
    path: 'adminLogin',
    component: AdminHomeComponent
  },
  {
    path: '',
    component: AdminHomeComponent,
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)  
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then(m => m.ResultModule)  
  },
   {
    path: 'userRegistration',
    loadChildren: () => import('./user-registration/user-registration.module').then(m => m.UserRegistrationModule)  
  },
  {
    path: 'userTest',
    loadChildren: () => import('./user-registration/user-test/user-test.module').then(m => m.UserTestModule)  
  },
  {
    path: 'userMessage',
    loadChildren: () => import('./user-registration/user-message/user-message.module').then(m => m.UserMessageModule)  
  },
  {
    path: 'preview',
    loadChildren: () => import('./admin-home/preview/preview.module').then(m => m.PreviewModule)  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
