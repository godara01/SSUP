import {Component, OnInit} from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export interface Document {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  isMobile = false;

  activateHandsetLayout() {
    this.isMobile = true;
    console.log(this.isMobile);
  };
  activateWebLayout() {
    this.isMobile = false;
    console.log(this.isMobile);
  };

  documents: Document[] = [
    {value: '0', viewValue: 'Passport'},
    {value: '1', viewValue: 'Bank Statement'},
    {value: '2', viewValue: 'Voter ID'},
    {value: '3', viewValue: 'Ration Card'},
    {value: '4', viewValue: 'Driving License'},
    {value: '5', viewValue: 'NREGS Job Card'},
    {value: '6', viewValue: 'Arms License'},
    {value: '7', viewValue: 'Photo Credit Card'},
    {value: '8', viewValue: 'Kissan Photo Passbook'},
    {value: '9', viewValue: 'Pensioner Photo Card'},
    {value: '10', viewValue: 'ECHS/ CGHS Photo Card'}
  ];

  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
    console.log("isSmallScreen");
    console.log(isSmallScreen);
    console.log("over");

    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (isSmallScreen) {
        this.activateHandsetLayout();
      }else{
        this.activateWebLayout();
      }
    });
  }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({ firstCtrl: ['', Validators.required] });
    this.secondFormGroup = this._formBuilder.group({ secondCtrl: ['', Validators.required] });
  }
}