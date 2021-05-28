import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationService } from './user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  userForm: FormGroup;
  public submitted = false;
  public allowUser: any;
  constructor(private validation: FormBuilder,
    private userService: UserRegistrationService,
    private route: Router
  ) {
    let self = this;
    this.userForm = self.validation.group({
    })
  }

  ngOnInit() {
    this.userForm = this.validation.group({
      userName: ["", [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      emailId: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(14)]]
    })
  }

  get h() {
    return this.userForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.userForm.reset();
  }

  saveUser() {
    let self = this;
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    self.userService.getAssessment(self.userForm.value)
      .subscribe((response) => {
        if (response) {
          this.route.navigate(['userTest']);
        } else {
          alert("Your are already taken a test")
        }
      }, (err) => {
        console.log(err);
      })
  }
}
