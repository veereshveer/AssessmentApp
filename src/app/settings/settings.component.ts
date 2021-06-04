import { Component, ElementRef, OnInit } from '@angular/core';
import { AdminHomeService } from '../admin-home/admin-home.service';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {
  public listAssessmentName: String = '';
  public assessments: any = [];
  public questionTypes: any = [];
  public selectedTime: string | undefined;
  testLink: Object ={};
  public timer:string='';
  public Link:string = '';
  public LinkTime:string = '';
  public TestTime1:string = '';
  public TestTime2:string = '';

  constructor(private homeService: AdminHomeService, private settingService: SettingsService) { 
    this.fetchAssessment();
  }

  fetchAssessment() {
    let self = this;
    self.homeService.getAssessment()
      .subscribe((response) => {
        console.log(response);
        self.assessments = response;
      }, (err) => {
        console.log(err);
      })
  }

  settingLink() {
    let self = this;
    self.settingService.getLink(this.listAssessmentName)
      .subscribe((response) => {
        console.log(response);
        self.testLink = response;
      }, (err) => {
        console.log(err);
      })

      this.Link = "http://localhost:8082/questionType";
      var myTimer: any;
      var time  = 4200;

       const matlock = () =>{
        --time;
        var seconds = time % 60;
        var minutes = (time - seconds) /60;
        var minutesLeft = minutes % 60;
        var hours  = (minutes - minutesLeft) % 60;
        this.timer = hours + "hr:" + minutes + "m:" + seconds + "s";
    
        if(time == 0){
          this.timer = "EXPIRED";
          clearInterval(myTimer);
        }
       }
       myTimer = setInterval(matlock, 1000);

       this.TestTime1 = this.TestTime2;

  }

  loadAssessmentDetails(event: any) {
    console.log(event.target.value);
     let self = this;
     self.homeService.getAllAssessment(event.target.value)
       .subscribe((response) => {
         self.questionTypes = response;
       }, (err) => {
         console.log(err);
       })

   }


  ngOnInit(): void {
  }

}

