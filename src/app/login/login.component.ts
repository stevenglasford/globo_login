import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth.service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private  authService:  AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) { 
    this.createForm();
  }

  createForm():void{
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user'])
    })
  }

  tryLogin(value):void{
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['user']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  ngOnInit(): void {
  }

}
