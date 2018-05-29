import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGenerateAppointmentComponent } from './agent-generate-appointment.component';

describe('AgentGenerateAppointmentComponent', () => {
  let component: AgentGenerateAppointmentComponent;
  let fixture: ComponentFixture<AgentGenerateAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentGenerateAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentGenerateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
