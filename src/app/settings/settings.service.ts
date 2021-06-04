import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  private assessmentUrl = "http://localhost:8082/userTest/1";
  private LinkUrl = "http://localhost:8082/questionType/";

  getLink = (id:any) => {
    let self = this;
    return self.http.get(self.assessmentUrl+id);
  }
}
