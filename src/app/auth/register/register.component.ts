import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: any;
  loggedIn: boolean;
  registerForm: FormGroup;
  displayName: any;
  email: any;
  password: any;
  constructor(public auth: AuthService, public router: Router) { 
    this.registerForm = new FormGroup({
      displayName: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }
  googleRegister(){
    this.auth.googleRegister();
  }
  registerWemail(){
    this.displayName = this.registerForm.value.displayName;
    this.email = this.registerForm.value.email;
    this.password = this.registerForm.value.password;
    // console.log(this.displayName, this.email, this.password);
    this.auth.EmailRegister(this.email, this.password, this.displayName);
  }
  ngOnInit() {
  }
}
