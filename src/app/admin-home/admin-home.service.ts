import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeService {

  constructor(private http: HttpClient) { }

  private assessmentUrl = "http://localhost:8082/assessment/";
  private questionTypeUrl = "http://localhost:8082/questionType/";

  getAssessment = () => {
    let self = this;
    return self.http.get(self.assessmentUrl);
  }

  postAssessment = (data: any) => {
    let self = this;
    console.log(data);
    return self.http.post(self.assessmentUrl, data);
  }
  
  putAssessment = (data: any) => {
    let self = this;
    return self.http.put(self.assessmentUrl, data);
  }

  getQuestionType = () => {
    let self = this;
    return self.http.get(self.questionTypeUrl);
  }

  deleteAssessment = (id: any) => {
    let self = this;
    return self.http.delete(self.assessmentUrl + id);
  }

  getAllAssessment = (id : any) => {
    let self = this;
    return self.http.get(self.questionTypeUrl+"getAll" + id);
  }
}
