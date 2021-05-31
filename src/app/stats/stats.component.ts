import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatsDetails } from '../stats-details';
import { StatsServiceService } from '../stats-service.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  
  assessmentdetails!: StatsDetails[];
  constructor(public statsservice:StatsServiceService) { }

  ngOnInit(): void {
    this.getAssessment();
  }
  private getAssessment(){
    this.statsservice.getassessmentList().subscribe(data =>{
      this.assessmentdetails=data;
     });
  }

}
