import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionairFirstComponent } from './questionair-first.component';

describe('QuestionairFirstComponent', () => {
  let component: QuestionairFirstComponent;
  let fixture: ComponentFixture<QuestionairFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionairFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionairFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
