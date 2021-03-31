import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionairThirdComponent } from './questionair-third.component';

describe('QuestionairThirdComponent', () => {
  let component: QuestionairThirdComponent;
  let fixture: ComponentFixture<QuestionairThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionairThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionairThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
