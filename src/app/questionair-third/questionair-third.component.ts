import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionair-third',
  templateUrl: './questionair-third.component.html',
  styleUrls: ['./questionair-third.component.css']
})
export class QuestionairThirdComponent implements OnInit {
  industries = ["Construction", "Hospitality", "Real Estate", "Tourism", "Manufacturing"]
  reasonToComeDubai = ["LifeStyle", "Work Opportunities", "Education", "Finance", "Tourism", "Family"]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  callFourthQuestionair() {
    this.router.navigateByUrl("/questionair-four")
  }
  goBackToSecond() {
    this.router.navigateByUrl("/questionair-second")
  }

}
