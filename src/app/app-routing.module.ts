import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { QuestionairCompleteComponent } from './questionair-complete/questionair-complete.component';
import { QuestionairFirstComponent } from './questionair-first/questionair-first.component';
import { QuestionairFourComponent } from './questionair-four/questionair-four.component';
import { QuestionairSecondComponent } from './questionair-second/questionair-second.component';
import { QuestionairThirdComponent } from './questionair-third/questionair-third.component';

const routes: Routes = [
  { path: '', redirectTo: 'personal', pathMatch: 'full' },  
  { path: 'personal', component: PersonalDetailsComponent },
  { path: 'personal/:id', component: PersonalDetailsComponent },
  { path: 'questionair-first', component: QuestionairFirstComponent },
  { path: 'questionair-second', component: QuestionairSecondComponent },
  { path: 'questionair-third', component: QuestionairThirdComponent },
  { path: 'questionair-four', component: QuestionairFourComponent },
  { path: 'questionair-complete', component: QuestionairCompleteComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
