import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMainmenuComponent } from './agent-mainmenu.component';

describe('AgentMainmenuComponent', () => {
  let component: AgentMainmenuComponent;
  let fixture: ComponentFixture<AgentMainmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentMainmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMainmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
