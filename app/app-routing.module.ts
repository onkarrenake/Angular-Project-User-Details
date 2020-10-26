import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path : 'userRegistration' , component : UserRegistrationComponent},
  {path : 'welcome' , component : WelcomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : '' , component : WelcomeComponent},
  {path : '**' , component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
