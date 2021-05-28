import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTestComponent } from './user-test.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserTestComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ]
})
export class UserTestModule { }
