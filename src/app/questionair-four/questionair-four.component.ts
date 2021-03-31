import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getpersonalDetailsObjState } from 'src/core/reducers';

@Component({
  selector: 'app-questionair-four',
  templateUrl: './questionair-four.component.html',
  styleUrls: ['./questionair-four.component.css']
})
export class QuestionairFourComponent implements OnInit {
 interests=["Outdoors","Fitness","Health","Travels","Sports" ,"Theme Park","Cooking"]
  constructor(private router:Router,private store: Store<{details:any}>) { }

  ngOnInit(): void {
    let data: any = select(getpersonalDetailsObjState);
    this.store.pipe(data).subscribe(async (data: any) => {
      console.log("@@@@@@@@@@@@",data);
      
    });
  }
  callfiveQuestionair(){
    this.router.navigateByUrl("/questionair-complete")
    
  }
}
