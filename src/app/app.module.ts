import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatSidenavModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { HeadersComponent } from './headers/headers.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    HeadersComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatToolbarModule, MatListModule, MatCardModule,
    MatStepperModule, MatMenuModule, FormsModule, ReactiveFormsModule, MatOptionModule, MatSelectModule, MatInputModule, MatSidenavModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
