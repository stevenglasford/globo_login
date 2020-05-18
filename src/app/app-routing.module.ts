import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from  './login/login.component';
import { RegisterComponent } from  './register/register.component';
import { ForgotPasswordComponent } from  './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from  './verify-email/verify-email.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: AppComponent, /*pathMatch: 'full'*/},
  {path: 'login', component: LoginComponent, /*canActivate: [AuthGuard]*/},
  {path: 'register', component: RegisterComponent, /*canActivate: [AuthGuard]*/},
  // {path: 'forgot', component: ForgotPasswordComponent},
  // {path: 'verify', component: VerifyEmailComponent},
  {path: 'user', component: UserComponent, /*resolve: {data: UserResolver}*/}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
