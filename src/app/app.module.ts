import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Resolve , Router  } from '@angular/router';


import { AdminData } from './AdminData';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';



import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import {NgbModule , NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';


import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { AgentMainmenuComponent } from './components/agent-mainmenu/agent-mainmenu.component';
import { AgentRegisterNewPatientComponent } from './components/agent-register-new-patient/agent-register-new-patient.component';
import { AgentReviewPatientComponent } from './components/agent-review-patient/agent-review-patient.component';
import { AgentReviewAppointmentComponent } from './components/agent-review-appointment/agent-review-appointment.component';
import { AgentGenerateAppointmentComponent } from './components/agent-generate-appointment/agent-generate-appointment.component';


@Injectable()
export class Authenicate implements Resolve<Observable<string>> {
  constructor( public route: Router,
               public adminData: AdminData) {}

  resolve() {
    if ( this.adminData.userdetail.token === '') {
      this.route.navigate(['/Login']);
    }
    return Observable.of('');
  }
}


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    LoginComponent,
    AgentMainmenuComponent,
    AgentRegisterNewPatientComponent,
    AgentReviewPatientComponent,
    AgentReviewAppointmentComponent,
    AgentGenerateAppointmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'Login',
        component: LoginComponent
      },
      {
        path: 'AgentMainmenu',
        component: AgentMainmenuComponent,
        resolve: { authenicated: Authenicate }
      },
      {
        path: 'AgentReviewPatient',
        component: AgentReviewPatientComponent,
        resolve: { authenicated: Authenicate }
      },
      {
        path: 'AgentRegisterNewPatient',
        component: AgentRegisterNewPatientComponent,
        resolve: { authenicated: Authenicate }
      },

      {
        path: 'AgentGenerateAppointment',
        component: AgentGenerateAppointmentComponent,
        resolve: { authenicated: Authenicate }
      },
      {
        path: 'AgentReviewAppointment',
        component: AgentReviewAppointmentComponent,
        resolve: { authenicated: Authenicate }
      },
      {
        path: '**',
        redirectTo: '/main',
        pathMatch: 'full'
      }
    ]),
    HttpModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    NgbDropdownConfig,
    AppService,
    AdminData,
    Authenicate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
