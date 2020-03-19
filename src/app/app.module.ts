import { CoursesComponent } from './pages/courses/courses.component';
import { MateriComponent } from './pages/courses/materi/materi.component';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmbedVideo } from 'ngx-embed-video';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbIconModule, 
} from '@nebular/theme';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuard } from './auth/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
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
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(config),
    ThemeModule.forRoot(),
    ReactiveFormsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbIconModule,
    EmbedVideo.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [AppComponent],
  providers : [AuthGuard]
})
export class AppModule {
}
