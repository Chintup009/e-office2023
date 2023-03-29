import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SplashComponent } from './splash/splash.component';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { Admin3Component } from './admin3/admin3.component';
import { Admin4Component } from './admin4/admin4.component';
import { Admin5Component } from './admin5/admin5.component';
import { Admin6Component } from './admin6/admin6.component';
import { Admin7Component } from './admin7/admin7.component';
import { Users3Component } from './users3/users3.component';
import { Users4Component } from './users4/users4.component';
import { Users5Component } from './users5/users5.component';
import { Users1Component } from './users1/users1.component';
import { Users2Component } from './users2/users2.component';


// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SplashComponent,
    Admin1Component,
    Admin2Component,
    Admin3Component,
    Admin4Component,
    Admin5Component,
    Admin6Component,
    Admin7Component,
    Users1Component,
    Users2Component,
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
