import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMessageComponent } from './user-message.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserMessageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserMessageModule { }
