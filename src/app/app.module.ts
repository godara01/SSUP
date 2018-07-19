import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule, MatIconModule, MatButtonModule, MatGridListModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
   MatInputModule, MatSidenavModule, MatMenuModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { HeadersComponent } from './headers/headers.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { FaqComponent } from './faq/faq.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    HeadersComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    HomepageComponent,
    InstructionsComponent,
    FaqComponent,
    ContactusComponent,
    UpdatestatusComponent
  ],
  imports: [
    BrowserModule, MatSelectModule, MatGridListModule, BrowserAnimationsModule,
     MatIconModule, MatButtonModule, MatFormFieldModule, MatToolbarModule, MatListModule, MatCardModule,
    MatStepperModule, MatMenuModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatOptionModule,
    MatSelectModule, MatInputModule, MatSidenavModule, AppRoutingModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
