/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { VerificationComponent } from './verification/verification.component';
import { SecureInnerPagesGuard } from './secure-login.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,  canActivate: [SecureInnerPagesGuard],
    children: [
      {
        path: 'register',
        component: RegisterComponent, canActivate: [SecureInnerPagesGuard]
      },
      {
        path: 'login',
        component: LoginComponent, canActivate: [SecureInnerPagesGuard]
      },
      {
        path: 'verification',
        component: VerificationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers : [AuthGuard]
})
export class AuthRoutingModule {
}