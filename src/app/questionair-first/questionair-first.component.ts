import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionair-first',
  templateUrl: './questionair-first.component.html',
  styleUrls: ['./questionair-first.component.css']
})
export class QuestionairFirstComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    


  }
  goBackToPersonal(){
    this.router.navigateByUrl("/personal")
    
  }
  callSecondQuestionair(){
    this.router.navigateByUrl("/questionair-second")
  }
}
