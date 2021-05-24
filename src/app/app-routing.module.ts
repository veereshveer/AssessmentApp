import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthenticationGuardGuard } from './guard/authentication-guard.guard';

const routes: Routes = [
  {
    path: 'adminLogin',
    component: AdminLoginComponent
  },
  {
    path: '',
    component: AdminHomeComponent,
    canActivate: [AuthenticationGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
