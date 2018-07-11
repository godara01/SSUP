import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
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
  ngOnInit() {
  }

}
