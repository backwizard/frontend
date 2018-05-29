import { Component, OnInit } from '@angular/core';
import {AdminData} from '../../AdminData';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-agent-review-appointment',
  templateUrl: './agent-review-appointment.component.html',
  styleUrls: ['./agent-review-appointment.component.css']
})
export class AgentReviewAppointmentComponent implements OnInit {

  PatientId = '';
  Permission = '';
  RejectNote = '';
  Status = '';
  AttachFile = {
    data: '',
    encoding: '',
    md5: '',
    mimetype: '',
    name: '',
    truncated: false

  };


  AttachFileHospital = {
    data: '',
    encoding: '',
    md5: '',
    mimetype: '',
    name: '',
    truncated: false

  };

  HospitalList = [];
  HospitalSelectIndex = 1;
  HospitalSelect=[
    {
      Name: '',
      Email: ''
    },
    {
      Name: '',
      Email: ''
    },
    {
      Name: '',
      Email: ''
    },
    {
      Name: '',
      Email: ''
    },
    {
      Name: '',
      Email: ''
    },
    {
      Name: '',
      Email: ''
    },
    {
      Name: '',
      Email: ''
    },
    {
      Name: '',
      Email: ''
    },
    {
      Name: '',
      Email: ''
    }
  ];

  Data = {
    HospitalNumber: '',
    PatientFirstName: '',
    PatientLastName: '',
    Gender: '',
    MaritalStatus: '',
    DOB: '',
    Occupation: '',

    Address: '',
    Nationality: '',
    PassportNumber: '',
    languagesSpoken: '',

    ContactPhone: '',
    ContactMobile: '',
    Email: '',
    EmergencyContactDetails: '',
    RelationshipWithPatient: '',
    MedicalInsurance: 'No',
    InsuranceCompanyName: '',
    PolicyNumber: '',
    Interpreter: 'No',
    LanguageRequired: '',
    VisaAssistance: 'No',





    MedicalDiagnosis1: '',
    MedicalDiagnosis2: '',
    MedicalDiagnosis3: '',
    MedicalDiagnosis4: '',
    MedicalDiagnosis5: '',
    MedicalDiagnosis6: '',
    CurrentMedicalCondition: '',
    MedicalList1: '',
    MedicalList2: '',
    MedicalList3: '',
    MedicalList4: '',
    MedicalList5: '',
    MedicalList6: '',
    AnyAllergy: 'No',
    ProvideDetails: '',
    TreatmentGiven: '',
    ReasonForReferral: '',
    SpecialNeeds: '',
    PreparedBy: '',
    HospitalRequest: ''

  };

  constructor(public route: Router,
              private appService: AppService,
              private adminData: AdminData) {
  }

  ngOnInit() {
    this.Permission = this.adminData.userdetail.permission;
    this.appService.getPaient(this.adminData.SelectData.PatientId).subscribe(response => {
      console.log(response);
      this.Data = response.Data;
      this.PatientId = response.Id;
      if(response.File) {
        this.AttachFile = response.File;
      }

      if(response.AttachFileHospital) {
        this.AttachFileHospital = response.AttachFileHospital;
      }

      this.Status = response.Status;
      if(response.Status === 'SendingAppointmentToHospital' || response.Status === 'Approved'){
        this.HospitalSelect = response.HospitalSelect;
        this.HospitalSelectIndex=this.HospitalSelectIndex-1;
        for(let i =0;i<this.HospitalSelect.length;i++){
          if(this.HospitalSelect[i].Name!==''){
            this.HospitalSelectIndex=this.HospitalSelectIndex+1;
          }
        }

      }

      this.appService.getHospitalList().subscribe(response2 => {
        this.HospitalList = response2;

      });

    });


  }

  DownloadFile(Name) {

    if(Name === 'AttachFile') {
      const byteCharacters = atob(this.AttachFile.data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {type: this.AttachFile.mimetype});
      saveAs(blob, this.AttachFile.name);
    }
    else  if(Name === 'AttachFileHospital') {
      const byteCharacters = atob(this.AttachFileHospital.data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {type: this.AttachFileHospital.mimetype});
      saveAs(blob, this.AttachFileHospital.name);
    }

  }



  ClearDataInputTypeFile(id) {
    (<HTMLInputElement>document.getElementById(id)).value = '';
  }
  SendAppointmentToHospital() {
    let EmailList ="";

    console.log(this.HospitalSelect)
    for(let i =0;i<this.HospitalSelect.length;i++){
      if(this.HospitalSelect[i].Name !== '') {
        for (let j = 0; j < this.HospitalList.length; j++) {
          if(this.HospitalSelect[i].Name === this.HospitalList[j].Name) {
            if (EmailList === "") {
              EmailList = EmailList + this.HospitalList[j].Email;
            }
            else {
              EmailList = EmailList + ',' + this.HospitalList[j].Email;
            }
          }
        }
      }

    }

    console.log(EmailList);
    const data = {
      HospitalSelect:this.HospitalSelect,
      Id:this.PatientId,
      PatientData:this.Data,
      EmailList:EmailList
    };

    console.log(data);

    this.appService.SendAppointmentToHospital(this.PatientId,data).subscribe(response => {
      console.log(response);
      this.route.navigate(['/AgentMainmenu']);
    });
  }


  AddAnotherHospital(){
    this.HospitalSelectIndex = this.HospitalSelectIndex + 1;
  }


  Reject() {

  }
  Approve() {
    let AttachFile: FileList = (<HTMLInputElement>document.getElementById('AttachFileHospital')).files;

    console.log(AttachFile);

    let formData: FormData = new FormData();
    if (AttachFile.length > 0) {
      let file: File = AttachFile[0];
      formData.append('AttachFileHospital', file, file.name);

    }

    this.appService.Approve(formData, this.PatientId).subscribe(response => {
      console.log(response);
      this.route.navigate(['/AgentMainmenu']);

    });
  }

}
