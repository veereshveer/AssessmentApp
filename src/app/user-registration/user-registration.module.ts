import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTestComponent } from './user-test/user-test.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { UserRegistrationComponent } from './user-registration.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserRegistrationComponent
  }
];


@NgModule({
  declarations: [
    UserTestComponent,
    UserMessageComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserRegistrationModule { }
