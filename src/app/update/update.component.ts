import {Component, OnInit} from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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