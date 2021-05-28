import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-test',
  templateUrl: './user-test.component.html',
  styleUrls: ['./user-test.component.scss']
})
export class UserTestComponent implements OnInit {
 // name = "Angular " + VERSION.major;
 display: any;
 constructor() {
   this.timer(1);

   let self = this;
   // self.fetchAssessment();
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
       alert("hai veeresh");
     }
   }, 1000);
 }


  ngOnInit(): void {
  }

}
