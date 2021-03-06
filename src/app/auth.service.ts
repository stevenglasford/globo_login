import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import * as firebase from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
// import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) { 
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }

  doLogin(value){
    return new Promise<any>((resolve,reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser){
        this.afAuth.signOut();
        resolve();
      }
      else{
        reject();
      }
    })
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  getUserFingerPrint(): string{
    return '';
  }

  // async login(email: string, password: string) {
  //   var result = await this.afAuth.signInWithEmailAndPassword(email,password);
  //   this.router.navigate(['user']);
  // }

  // async register(email: string, password: string) {
  //   var result = await this.afAuth.createUserWithEmailAndPassword(email,password)
  //   //this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //   // this.sendEmailVerification();
  // }

  // // async sendEmailVerification() {
  // //   await this.afAuth.//await this.afAuth.//this.afAuth.auth.currentUser.sendEmailVerification()
  // //   this.router.navigate(['admin/verify-email']);
  // // }

  // async sendPasswordResetEmail(passwordResetEmail: string) {
  //   return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  // }

  // async logout(){
  //   await this.afAuth.signOut()
  //   localStorage.removeItem('user');
  //   this.router.navigate(['admin/login']);
  // }

  // get isLoggedIn(): boolean {
  //   const  user  =  JSON.parse(localStorage.getItem('user'));
  //   return  user  !==  null;
  // }

  // async  loginWithGoogle(){
  //   await  this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
  //   this.router.navigate(['admin/list']);
  // }
}
