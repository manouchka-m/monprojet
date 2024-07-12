import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import { LayoutComponent } from './core/layout/layout/layout.component';
import { HomeComponent } from './core/home/home.component';
import { MoviesComponent } from './core/layout/movies/movies.component';
import { BackgroundComponent } from './authentification/background/background.component';
import { SignupComponent } from './authentification/signup/signup.component';


const routes: Routes = [
  {path : "login" , component : LoginComponent },
  {path : "signup" , component : SignupComponent },
  {path : "back" , component : BackgroundComponent },
  {path : "dashboard" , component : LayoutComponent , children:[
    {path : "" , component :HomeComponent },
    {path : "movie" , component : MoviesComponent},
   
  ] }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
