import { Component, OnInit } from '@angular/core';
import { UserTestService } from './user-test.service';

@Component({
  selector: 'app-user-test',
  templateUrl: './user-test.component.html',
  styleUrls: ['./user-test.component.scss']
})
export class UserTestComponent implements OnInit {
 // name = "Angular " + VERSION.major;
 display: any;
 constructor(private previewService: UserTestService) {
  let self = this;

   self.timer(1);

   self.fetchAssessment();
 }


 timer(minute: number) {
   // let minute = 1;
   let seconds: number = minute * 60;
   let textSec: any = "0";
   let statSec: number = 60;

   const prefix = minute < 10 ? "0" : "";

   const timer = setInterval(() => {
     seconds--;
     if (statSec != 0) statSec--;
     else statSec = 59;

     if (statSec < 10) {
       textSec = "0" + statSec;
     } else textSec = statSec;

     this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

     if (seconds == 0) {
       console.log("finished");
       clearInterval(timer);
       this.submitTest();     }
   }, 1000);
 }

 isQuestionCardShow: boolean = false;
 dropdownList: any = [];
 public assessments: any = [];

 fetchAssessment() {
   let self = this;
   self.previewService.getAssessment(103)
     .subscribe((response) => {
       console.log(response);
       self.assessments = response;
       for (let assessment of self.assessments) {
         console.log(assessment.questions);

         console.log(assessment.assessment.assessmentName);
       }
     }, (err) => {
       console.log(err);
     })
 }

 answerArray = [];

 ngOnInit(): void {
 }
 submitTest(){
   alert("timmer is Working");
 }
}
