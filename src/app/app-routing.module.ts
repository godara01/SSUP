import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateComponent } from './update/update.component';
import { FaqComponent } from './faq/faq.component';
import { UpdatestatusComponent } from './updatestatus/updatestatus.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  { path:'home', component: HomepageComponent},
  { path:'updateportal', component: UpdateComponent},
  { path:'faq', component: FaqComponent},
  { path:'updatestatus', component: UpdatestatusComponent},
  { path:'instructions', component: InstructionsComponent},
  { path:'contactus', component: ContactusComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
