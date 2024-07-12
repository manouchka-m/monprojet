import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './authentification/login/login.component';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { HeaderComponent } from './core/layout/layout/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { MoviesComponent } from './core/layout/movies/movies.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { BackgroundComponent } from './authentification/background/background.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,
    HomeComponent,
    MoviesComponent,
    SignupComponent,
    BackgroundComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
