import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SplashComponent } from './splash/splash.component';
import { Users3Component } from './users3/users3.component';
import { Users4Component } from './users4/users4.component';
import { Users5Component } from './users5/users5.component';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    SplashComponent,
    Users3Component,
    Users4Component,
    Users5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
