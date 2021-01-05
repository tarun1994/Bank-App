import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private routes: Router) { }
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
    if(localStorage.getItem('username') != null){
      return true;
    }else{
      this.routes.navigate(['/login']);
      return false;
    }
  }
}
