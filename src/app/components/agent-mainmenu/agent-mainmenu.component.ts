import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { AdminData } from '../../AdminData';
@Component({
  selector: 'app-agent-mainmenu',
  templateUrl: './agent-mainmenu.component.html',
  styleUrls: ['./agent-mainmenu.component.css']
})
export class AgentMainmenuComponent implements OnInit {
  patientList = [];
  permission = '';
  constructor(public route: Router,
              private appService: AppService,
              private adminData: AdminData) { }

  ngOnInit() {
    this.permission = this.adminData.userdetail.permission;


    this.appService.getPatientList(this.adminData.userdetail.username).subscribe(response => {
      console.log(response);
      this.patientList = response;

    });



  }


  selectEquipment(id) {
    console.log(id);
    this.adminData.SelectData.PatientId = id;
    this.route.navigate(['/AgentReviewAppointment']);
  }

  GenerateAppointment() {
    this.route.navigate(['/AgentGenerateAppointment']);
  }
}
