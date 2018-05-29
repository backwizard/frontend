import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentReviewAppointmentComponent } from './agent-review-appointment.component';

describe('AgentReviewAppointmentComponent', () => {
  let component: AgentReviewAppointmentComponent;
  let fixture: ComponentFixture<AgentReviewAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentReviewAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentReviewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
