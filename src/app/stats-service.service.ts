import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatsDetails } from './stats-details';

@Injectable({
  providedIn: 'root'
})
export class StatsServiceService {

  private url = "http://localhost:8082/test/";
  
  constructor(private httpClient: HttpClient) { }

    getassessmentList() : Observable<StatsDetails[]>
    {
      return this.httpClient.get<StatsDetails[]>(this.url);
    }
}
