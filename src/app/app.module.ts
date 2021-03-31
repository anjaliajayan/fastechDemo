import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule, StoreRootModule } from '@ngrx/store';

import {
  ROOT_REDUCERS
} from "../core/reducers";
import { QuestionairFirstComponent } from './questionair-first/questionair-first.component';
import { QuestionairSecondComponent } from './questionair-second/questionair-second.component';
import { QuestionairThirdComponent } from './questionair-third/questionair-third.component';
import { QuestionairCompleteComponent } from './questionair-complete/questionair-complete.component';
// import { StoreRouterConnectingModule, RouterState } from "@ngrx/router-store";
 //import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    QuestionairFirstComponent,
    QuestionairSecondComponent,
    QuestionairThirdComponent,
    QuestionairCompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    StoreRootModule, 
    StoreModule.forRoot(ROOT_REDUCERS, {}),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    // StoreRouterConnectingModule.forRoot(),

    // StoreDevtoolsModule.instrument({
    //   name: "NgRx TPConnects - Aggregator Platform",
    //   logOnly: true,
    // }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
