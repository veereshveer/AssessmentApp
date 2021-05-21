import { Component, OnInit, Self } from '@angular/core';
import { AdminHomeService } from './admin-home.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  public assessmentName : String ='';
  public assessments : any = [];
  public questionTypes : any = [];
  public assessmentBlock : String = 'd-none';
  public questionBlock : String = 'd-none';
  public questionType : String ='' ;

  constructor(private homeService:AdminHomeService) { 
    let self = this;
    self.fetchAssessment();
  }

  ngOnInit(): void {
  }

  fetchAssessment() {
    let self = this;
    self.homeService.getAssessment()
      .subscribe((response) => {
        self.assessments = response;
      }, (err) => {
        console.log(err);
      })
  }

  newAssessment(){
    let self = this;
    self.assessmentBlock = '';
  }

  addAssessment(){
    let self = this;
    self.questionBlock ='';
    self.homeService.postAssessment(
      {
        "assessmentName" :self.assessmentName
      }
    ).subscribe((response) => {
        self.questionBlock ='';
        self.homeService.getQuestionType()
        .subscribe((response) => {
          self.questionTypes = response;
        }, (err) => {
          console.log(err);
        })   
      }, (err) => {
        console.log(err);
      })
  }

}
