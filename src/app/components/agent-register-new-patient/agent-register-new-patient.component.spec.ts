import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentRegisterNewPatientComponent } from './agent-register-new-patient.component';

describe('AgentRegisterNewPatientComponent', () => {
  let component: AgentRegisterNewPatientComponent;
  let fixture: ComponentFixture<AgentRegisterNewPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentRegisterNewPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentRegisterNewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
