import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import AdminService from "../admin-login/admin.service";

@Injectable()
export class AuthInterCeptor implements HttpInterceptor {
    constructor(private router:Router,private adminService:AdminService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.url.includes('/authenticate')) {
            return next.handle(request);
        }
        const requestClone = request.clone({ setHeaders: { Authorization: `Bearer ${this.adminService.getTokenFromCache()}`} });
        return next.handle(requestClone);
    }
}