/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule, NbOAuth2AuthStrategy, NbOAuth2ResponseType, NbAuthOAuth2Token, NbAuthOAuth2JWTToken } from '@nebular/auth';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule,NbIconModule,NbWindowModule,NbStepperModule,NbCardModule,NbRadioModule,NbLayoutModule, NbUserModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuard } from './auth.guard';
import { VerificationComponent } from './verification/verification.component';

const config = {
  apiKey: "AIzaSyAkN7C_cCU6ryGJinKY6ndmAx_o-FhUG7o",
  authDomain: "kewirus-v1.firebaseapp.com",
  databaseURL: "https://kewirus-v1.firebaseio.com",
  projectId: "kewirus-v1",
  storageBucket: "kewirus-v1.appspot.com",
  messagingSenderId: "878035590733",
  appId: "1:878035590733:web:551715ea6e67fc2ed00604",
  measurementId: "G-QJ38BCQW1K"
}
@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(config),
    ReactiveFormsModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbRadioModule,
    NbButtonModule,
    NbCheckboxModule,
    NbWindowModule,
    AuthRoutingModule,
    NbIconModule,
    NbAuthModule,
    NbStepperModule,
    NbCardModule,
    NbLayoutModule,
    NbUserModule,
    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'google',
          clientId: '219027435285-822fstg8ddquhag9bcu94v5vutclng42.apps.googleusercontent.com',
          clientSecret: '',
          authorize: {
            endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
            responseType: NbOAuth2ResponseType.TOKEN,
            scope: 'https://www.googleapis.com/auth/userinfo.profile',
            redirectUri: 'http://localhost:4200/auth/callback',
          },
          token: {
            class: NbAuthOAuth2Token
          }
        }),
      ],
      forms: {},
    }),
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    VerificationComponent
  ],
  providers : [AuthGuard]
})
export class AuthModule {
}
