import { Component, OnInit } from '@angular/core';
import { AuthService } from  './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Swipeshop Authentication Module';
  constructor(private  authService:  AuthService) { }

  login(username: string, password: string): boolean {
    return false;
  }

  ngOnInit(): void {
  }

}
