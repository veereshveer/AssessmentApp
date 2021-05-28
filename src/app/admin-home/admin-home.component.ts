import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminHomeService } from './admin-home.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
 // public form: FormGroup;
  //public contactList: FormArray;

  public assessments: any = [];
  public questionsTypes: any = [];
  public test: any;
  public qType: any;
  public answers: any = [];
  public answer1: any;
  public question: any = {};

  constructor(private fb: FormBuilder, private homeService: AdminHomeService,) {}

  ngOnInit() {
    this.fetchAssessment();
    this.fetchQuestionTypes();
  }

  form = this.fb.group({
    assessmentId: ["",Validators.compose([Validators.required])],
    questions: this.fb.array([this.createQuestion()])
  });

  questionList = this.form.get('questions') as FormArray;

  createQuestion(): FormGroup {
    this.question = {
      questionType: ["3", Validators.compose([Validators.required])], // i.e Email, Phone
      questionName: [null, Validators.compose([Validators.required])], // i.e. Home, Office
      answer: [null, Validators.compose([Validators.required])]
    }

    return this.fb.group(this.question);
  }

  get questionFormGroup() {
    return this.form.get('questions') as FormArray;
  }

  addQuestion() {
    this.questionList.push(this.createQuestion());
  }


  removeQuestion(index:any) {
    this.questionList.removeAt(index);
  }

  test1(index:any){
    console.log(this.questionList.at(index).get('questionType')?.value);
  }

  insertQuestion(index:any) {
    console.log(this.form.value)
    console.log(this.form.get('assessmentId')?.value); 
    console.log(this.questionList.at(index).value);
	console.log(this.questionList.at(index));
  }

  cloneQuestion(index:any) {
    this.questionList.push(this.questionList.at(index));
  }

  changedFieldType(index:any) {
    console.log();
  }
  
  getQuestionsFormGroup(index:any): FormGroup {
    const formGroup = this.questionList.controls[index] as FormGroup;
    return formGroup;
  }

  submit() {
    console.log(this.form.value);
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

  fetchQuestionTypes() {
    this.homeService.getQuestionType()
      .subscribe(
        (response) =>{
          console.log(response);
          this.questionsTypes = response;
        },
        (err) => {
          console.log(err)
        });  
  }

  loadAssessmentDetails(){
  }

  loadQuestionType(questionsType:any)
  {
    if (questionsType.target.value === 1 || questionsType.target.value === 2 || questionsType.target.value === 4) {
      this.question.option1 = [null, Validators.compose([Validators.required])],
      this.question.option2 = [null, Validators.compose([Validators.required])],
      this.question.option3 = [null, Validators.compose([Validators.required])],
      this.question.option4 = [null, Validators.compose([Validators.required])]
    } else {
      delete this.question.option1;
      delete this.question.option2;
      delete this.question.option3;
      delete this.question.option4;
    }
  }
}