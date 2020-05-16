import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from  './admin/login/login.component';
import { RegisterComponent } from  './admin/register/register.component';
import { ForgotPasswordComponent } from  './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from  './admin/verify-email/verify-email.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
