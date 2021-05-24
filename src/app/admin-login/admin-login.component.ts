import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import AdminService from './admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit, OnDestroy {
  private subscription = new SubSink();
  constructor(private router : Router, private fb: FormBuilder, private adminService:AdminService) { }

  ngOnInit(): void {
    if(this.adminService.isUserLoggedIn()){
      this.router.navigateByUrl('');
    } else {
      this.router.navigateByUrl('adminLogin');
    }
  }

  login(){
    this.subscription.add(
      this.adminService.authenticate(this.loginForm.value).subscribe(
        (response) => {
          console.log(response.jwt);
          this.adminService.addTokenToCache(response.jwt)
          this.router.navigateByUrl('');
        }, 
        error => {
          console.log("Incorrect username and password");
        }
    ));  
  }

  loginForm = this.fb.group({
    adminEmail: ['',{
      validators:[
        Validators.required,
        Validators.email
        
      ]  
    }],
    adminPassword: ['',{
      validators:[
        Validators.required,
        Validators.minLength(5)
      ]  
    }]
  });

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
