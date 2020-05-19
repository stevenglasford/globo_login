import { Component, OnInit } from '@angular/core';
import { AuthService } from  './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Swipeshop Authentication Module';
  userid: string = '';
  constructor(private  authService:  AuthService) { }

  setUser(name: string):void{
    this.userid = name;
  }

  ngOnInit(): void {
    this.userid = this.authService.user.uid;
  }

}
