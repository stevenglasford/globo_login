import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FirebaseUserModel } from '../user.model';
import { UserService } from '../user.service'
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: Observable<string>;
  profileForm: FormGroup;
  uniqueUserId: string = '';

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.uniqueUserId = this.authService.user.uid;
  }

  createForm(name){
    this.profileForm = this.fb.group({
      name: [name, Validators.required]
    });
  }

  save(value){
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => console.log(err))
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout Error", error);
    });
  }
}
