import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeService {

  constructor( private http:HttpClient) { }
  private url="";
  
  getAssessment = () => {
    let self = this;
    return self.http.get(self.url);
  }

  postAssessment = (data : any) => {
    let self = this;
    return self.http.post(self.url , data);
  }

  getQuestionType = () => {
    let self = this;
    return self.http.get(self.url);
  }

}
