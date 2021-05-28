import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTestService {
 
  private questionUrl = "http://localhost:8082/question/assessmentId/";

  constructor(private http: HttpClient) { }
  getAssessment=(id :number)=> {
    let self = this;
    return self.http.get(self.questionUrl+id);
  }
  
}
