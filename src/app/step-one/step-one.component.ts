import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  
  constructor(private _formBuilder: FormBuilder) { 
  // console.log("fff");

  }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({ firstCtrl: ['', Validators.required] });
    this.secondFormGroup = this._formBuilder.group({ secondCtrl: ['', Validators.required] });
  }

}
