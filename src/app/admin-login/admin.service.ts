import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export default class AdminService {
  private jwtHelper = new JwtHelperService();
  url = 'http://localhost:8080/authenticate';
  
  constructor(private http: HttpClient) { }

  public authenticate(admin: Admin): Observable<any>{
    return this.http.post<Admin>(this.url, admin);
  }

  login(admin : Admin) : Observable<HttpResponse<any>> { 
    return this.http.post<Admin>(`${this.url}`, admin, { observe : 'response'});
  }

  // addUserToCache(admin : Admin): void{
  //   localStorage.setItem('admin', JSON.stringify(admin));
  // }

  // getUserFromCache(): string{
  //   return JSON.stringify(localStorage.getItem('admin'));
  // }

  addTokenToCache(token: string): void{
    localStorage.setItem('token', token);
  }

  getTokenFromCache(): string | null{
    return localStorage.getItem('token');
  }

  // getTokenExpirationDate(): Date | null {
  //   return this.jwtHelper.getTokenExpirationDate(this.getTokenFromCache());
  // }

  isUserLoggedIn(): boolean {
    if(this.getTokenFromCache())
    {
      return true;
    }
    return false;
  }
  logOut():boolean{
    localStorage.removeItem('token');
    return true;
  }
}

