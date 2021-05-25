import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  isCollapsed: boolean = true;
  isQuestionCardShow: boolean = false;
  totalAnswered: number = 0;
  rightAnswer: number | undefined;
  @Input()
  answer = 'not yet ready';
  checkbox = '';
  short = '';
  dropdownList: any = [];
  dropdownSettings!: IDropdownSettings;
  constructor( private fb: FormBuilder) { }
  
  answerArray = [];

  allQuestions: any = [
    {
      id: 1,
      question: ' Question 1',
      a: 'option A',
      b: 'option B',
      c: 'option C',
      d: 'option D',
      answer: 'c',
    },
    {
      id: 2,
      question: ' QUESTION 2',
      a: 'option A',
      b: 'option B',
      c: 'option C',
      d: 'option D',
      answer: 'b',
    },
    {
      id: 3,
      question: 'QUESTION 3',
      a: 'option A',
      b: 'option B',
      c: 'option C',
      d: 'option D',
      answer: 'b',
    },
  ];
  checkboxList: any = [
    {
      id: 1,
      question: ' QUESTION 1',
      a: 'option A',
      b: 'option B',
      c: 'option C',
      d: 'option D',
      answer: 'b',
    },
    {
      id: 2,
      question: ' QUESTION 2',
      a: 'option A',
      b: 'option B',
      c: 'option C',
      d: 'option D',
      answer: 'b',
    },
    {
      id: 3,
      question: ' QUESTION 3',
      a: 'option A',
      b: 'option B',
      c: 'option C',
      d: 'option D',
      answer: 'b',
    },
  ];


  ngOnInit(): void {
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Employee' },
    //   { item_id: 2, item_text: 'Department' },
    //   { item_id: 3, item_text: 'Project' },
    //   { item_id: 4, item_text: 'EPMS Department' },
    //   { item_id: 5, item_text: 'BI Department' },
    // ];
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true,
    // };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  preview() {
    this.isCollapsed = !this.isCollapsed;
  }
  delete() {}
  HomePage() {
    this.isQuestionCardShow = false;
  }
  dropList: any = ['a', 'b', 'c'];

  form = new FormGroup({
    dropSelect: new FormControl('', Validators.required),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  changedropSelect(e: any) {
    console.log(e.target.value);
  }


//checkbox  list-----------------------------------
  onCheckboxChange(e: any) {
    const checks: FormArray = this.form.get('checks') as FormArray;

    if (e.target.checked) {
      checks.push(new FormControl(e.target.value));
    } else {
      const index = checks.controls.findIndex(
        (x) => x.value === e.target.value
      );
      checks.removeAt(index);
    }
    
  }
  textArea:any=[
    {
      id: 1,
      question: ' QUESTION 1',

    },
    {
      id: 2,
      question: ' QUESTION 2'
    },

  ]
  form1: FormGroup = this.fb.group({
    textAnswers: [null]
  });

  }
  


