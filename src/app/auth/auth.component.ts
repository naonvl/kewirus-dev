
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbAuthOAuth2JWTToken, NbAuthService, NbAuthResult } from '@nebular/auth';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private destroy$ = new Subject<void>();
  token: any;
  user: any;
  constructor(public auth: AuthService, private router: Router) {

  }
  ngOnInit() {
  }

}
