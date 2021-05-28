import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  private url = "http://localhost:8082/userTest/";
  constructor(private http:HttpClient) { }  
 
  public getAssessment = (data : any) =>{
    let self = this;
    return self.http.post(self.url, data);
  }
}
