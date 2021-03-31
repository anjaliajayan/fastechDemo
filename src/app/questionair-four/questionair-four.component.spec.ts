import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionairFourComponent } from './questionair-four.component';

describe('QuestionairFourComponent', () => {
  let component: QuestionairFourComponent;
  let fixture: ComponentFixture<QuestionairFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionairFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionairFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
