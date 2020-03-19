import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;
  loggedIn: boolean;
  rememberUser: any;
  checked = false;
  loginForm: FormGroup;
  email: any;
  password: any;
  remember(checked: boolean) {
    this.checked = checked;
  }
  constructor(public auth: AuthService, public router: Router) {
    this.user = this.auth.user$;
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
    this.auth.alreadyLoggedin();
  }
  googleLogin() {
    if (this.checked == false) {
      this.auth.googleSignin();
    } else if (this.checked == true) {
      this.auth.googleSigninWremember();
    }
  }
  googleLogout() {
    this.auth.signOut();
  }
  loginWemail(){
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;
    if (this.checked == false) {
      this.auth.EmailLogin(this.email, this.password);
    } else if (this.checked == true) {
      this.auth.EmailLoginWremember(this.email, this.password);
    }
    // console.log(this.loginForm.value);
    
  }
  ngOnInit() {
    // if (this.user) {
    //   this.router.navigateByUrl('/pages/dashboard');
    // }
    
    // if (localStorage.getItem('user') != "remember") {
    //   console.log('please login');
    // } else if (localStorage.getItem('user') == "remember") {
    //   this.router.navigateByUrl('/pages/dashboard');
    // }
  }
}
