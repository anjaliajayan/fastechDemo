import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionairCompleteComponent } from './questionair-complete.component';

describe('QuestionairCompleteComponent', () => {
  let component: QuestionairCompleteComponent;
  let fixture: ComponentFixture<QuestionairCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionairCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionairCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
