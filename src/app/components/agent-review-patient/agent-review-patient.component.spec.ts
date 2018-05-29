import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentReviewPatientComponent } from './agent-review-patient.component';

describe('AgentReviewPatientComponent', () => {
  let component: AgentReviewPatientComponent;
  let fixture: ComponentFixture<AgentReviewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentReviewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentReviewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
