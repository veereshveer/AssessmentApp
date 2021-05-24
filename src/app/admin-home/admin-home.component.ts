import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminHomeService } from './admin-home.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  public listAssessmentName: String = '';
  public NewAssessmentName: String = '';
  public assessments: any = [];
  public questionTypes: any = [];
  public assessment: any = [];
  public assessmentBlock: String = 'd-none';
  public questionBlock: String = 'd-none';
  public questionType: String = '';
  public assessmentRadio: String = '';
  public assessmentForm: FormGroup;
  public submitted = false;
  public answers : any ;
  public questionCount : number = 1;
  public questionDivBlock : any =[this.questionCount];

  constructor(private homeService: AdminHomeService, private validation: FormBuilder) {
    let self = this;
    self.answers =[];
    this.assessmentForm = self.validation.group({
    })
    self.fetchAssessment();
  }

  ngOnInit(): void {
    let self = this;
    self.assessmentForm = self.validation.group({
      assessmentName: ["", [Validators.required]],
      assessmentActive: ["", [Validators.required]],
      assessmentId: ["",]
    })
  }
  onReset() {
    let self = this;
    self.submitted = false;
    self.assessmentForm.reset();
  }

  get h() {
    return this.assessmentForm.controls;
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

  newAssessment() {
    let self = this;
    self.assessmentBlock = '';    
    self.questionBlock = '';
    self.homeService.getQuestionType()
    .subscribe((response) => {
      self.questionTypes = response;
    }, (err) => {
      console.log(err);
    })
  }

  saveAssessment() {
    let self = this;
    if (this.assessmentForm.value.assessmentId !== '') {
      self.editAssessment();
    }
    else {
      self.addAssessment();
    }
  }

  addAssessment() {
    this.questionBlock = '';
    let self = this;
    self.homeService.postAssessment(
      {
        "assessmentName": self.assessmentForm.value.assessmentName,
        "active": self.assessmentForm.value.assessmentActive
      }
    ).subscribe((response) => {
      self.assessment = response
      self.assessmentForm.value.assessmentId = self.assessment.assessmentId;
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

  editAssessment() {
    console.log(this.assessmentForm.value);
    let self = this;
    self.homeService.putAssessment(
      {
        "assessmentName": self.assessmentForm.value.assessmentName,
        "active": self.assessmentForm.value.assessmentActive,
        "assessmentId": self.assessmentForm.value.assessmentId
      }
    ).subscribe((response) => {
      console.log(response);
    }, (err) => {
      console.log(err);
    })
  }

  deleteAssessment(id: number) {
    let self = this;
    self.homeService.deleteAssessment(id)
      .subscribe((response) => {
        self.questionTypes = response;
      }, (err) => {
        console.log(err);
      })
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

  selectedQuestionType(selectedType : any){
    let self = this;
    self.questionType =selectedType.target.value;
  }

  loadAnswers(option : any){
    let self = this;
   self.answers.push(option.target.value);
  }

  saveQuestion(){
    let self = this;
    self.questionDivBlock.push(++self.questionCount);
  }

  deleteQuestion(id:number){
    let self = this;
    self.questionDivBlock.push(--self.questionCount);

  }
}