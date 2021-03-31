import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionairSecondComponent } from './questionair-second.component';

describe('QuestionairSecondComponent', () => {
  let component: QuestionairSecondComponent;
  let fixture: ComponentFixture<QuestionairSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionairSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionairSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
