import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import AdminService from '../admin-login/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardGuard implements CanActivate {
  constructor(private router:Router,private adminService:AdminService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.adminService.isUserLoggedIn())
    {
      return true;
    }
    this.router.navigate(['/adminLogin']);
    return false;
  }
  
}
