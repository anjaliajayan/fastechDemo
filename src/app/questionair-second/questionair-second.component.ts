import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionair-second',
  templateUrl: './questionair-second.component.html',
  styleUrls: ['./questionair-second.component.css']
})
export class QuestionairSecondComponent implements OnInit {
  reasonToComeDubai = ["LifeStyle", "Work Opportunities", "Education", "Finance", "Tourism", "Family"]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goBackToFirst() {
    this.router.navigateByUrl("/questionair-first")
  }
  callThirdQuestionair() {
    this.router.navigateByUrl("/questionair-third")
  }
}
