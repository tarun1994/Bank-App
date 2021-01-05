import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { IfscfinderComponent } from './ifscfinder/ifscfinder.component';


const routes: Routes = [{
  path:"", canActivate:[AuthService], component:LoginComponent
},{
  path:"login",component:LoginComponent
},{
  path:"home", canActivate:[AuthService], component: HomeComponent
},{
  path:"finder", component: IfscfinderComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
