import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { resolve } from 'url';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<User>;
  rememberUser: any;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigateByUrl('/auth/verification');
      })
  }
  // Sign up with email/password
  EmailRegister(email: any, password: any, displayName: any) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName : displayName,
          photoURL: ''
        }).then(() =>{
          this.updateUserData(result.user);
          this.SendVerificationMail();
          window.alert("You have been successfully registered!");
          console.log(result.user)
        });
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  get isLoggedIn(): any {
    const user = this.afAuth.auth.currentUser;
    // return (user !== null && user.emailVerified !== false) ? true : false;
    return console.log(user);
  }
  alreadyLoggedin(){
    const loggedin = this.afAuth.auth.currentUser;
    if( loggedin ){
      console.log(loggedin);
    } else {
      console.log('Not logged in');
    }
  }
  // Sign in with email/password
  async EmailLogin(email: any, password: any) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      console.log(result);
      // this.router.navigateByUrl('/pages/dashboard');
    }
    catch (error) {
      window.alert(error.message);
    }
  }
  async EmailLoginWremember(email: any, password: any) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      localStorage.setItem('user', 'remember');
      this.router.navigateByUrl('/pages/dashboard');
    }
    catch (error) {
      window.alert(error.message);
    }
  }
  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.router.navigateByUrl('/pages/dashboard');
    return this.updateUserData(credential.user);
  }
  async googleSigninWremember() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    localStorage.setItem('user', 'remember');
    this.router.navigateByUrl('/pages/dashboard');
    return this.updateUserData(credential.user);
  }
  async googleRegister() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.SendVerificationMail();
    localStorage.setItem('user', 'remember');
    this.router.navigateByUrl('/pages/projects/new-project');
    return this.updateUserData(credential.user);
  }
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }

    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.afAuth.auth.signOut();
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }

}