import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from  './login/login.component';
import { RegisterComponent } from  './register/register.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
