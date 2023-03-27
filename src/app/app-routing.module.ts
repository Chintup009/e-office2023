

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { SplashComponent } from './splash/splash.component';
import { Users3Component } from './users3/users3.component';
import { Users4Component } from './users4/users4.component';
import { Users5Component } from './users5/users5.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "menu", component: MenuComponent },
  { path: "splash", component: SplashComponent },  
  { path: "users3", component: Users3Component},  
  { path: "users4", component: Users4Component },  
  { path: "users5", component: Users5Component },  
  { path: "", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
