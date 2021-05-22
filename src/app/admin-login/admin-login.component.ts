import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    
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

}
