

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { Admin3Component } from './admin3/admin3.component';
import { Admin4Component } from './admin4/admin4.component';
import { Admin5Component } from './admin5/admin5.component';
import { Admin6Component } from './admin6/admin6.component';
import { Admin7Component } from './admin7/admin7.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { SplashComponent } from './splash/splash.component';
import { Users1Component } from './users1/users1.component';
import { Users2Component } from './users2/users2.component';
import { Users3Component } from './users3/users3.component';
import { Users4Component } from './users4/users4.component';
import { Users5Component } from './users5/users5.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "splash", component: SplashComponent },
  { path: "admin1", component: Admin1Component },
  { path: "admin2", component: Admin2Component },
  { path: "admin3", component: Admin3Component },
  { path: "admin4", component: Admin4Component },
  { path: "admin5", component: Admin5Component },
  { path: "admin6", component: Admin6Component },
  { path: "admin7", component: Admin7Component },
  { path: "splash", component: SplashComponent },
  { path: "users1", component: Users1Component },
  { path: "users2", component: Users2Component },
  { path: "users3", component: Users3Component },
  { path: "users4", component: Users4Component },
  { path: "users5", component: Users5Component },
  { path: "", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
