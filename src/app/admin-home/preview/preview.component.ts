import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PreviewService } from './preview.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  isQuestionCardShow: boolean = false;
  dropdownList: any = [];
  public assessments: any = [];
  constructor(private previewService: PreviewService) {
    let self = this;
    self.fetchAssessment();
  }

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

}


