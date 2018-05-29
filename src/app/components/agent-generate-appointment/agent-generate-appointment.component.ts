import { Component, OnInit } from '@angular/core';
import {AdminData} from '../../AdminData';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-agent-generate-appointment',
  templateUrl: './agent-generate-appointment.component.html',
  styleUrls: ['./agent-generate-appointment.component.css']
})
export class AgentGenerateAppointmentComponent implements OnInit {


  GenderList = [
    'Male', 'Female'
  ];
  MaritalStatusList = [
    'Single', 'Married', 'Widowed', 'Separated'
  ];

  NationalityList = [
    'Afghan',
    'Argentine',
    'Australian',
    'Belgian',
    'Bolivian',
    'Brazilian',
    'Cambodian',
    'Cameroonian',
    'Canadian',
    'Chilean',
    'Chinese',
    'Colombian',
    'Costa Rican',
    'Cuban',
    'Danish (Dane)',
    'Dominican',
    'Ecuadorian',
    'Egyptian',
    'Salvadorian',
    'English',
    'Estonian',
    'Ethiopian',
    'Finnish',
    'French',
    'German',
    'Ghanaian',
    'Greek',
    'Guatemalan',
    'Haitian',
    'Honduran',
    'Indonesian',
    'Iranian',
    'Irish',
    'Israeli',
    'Italian',
    'Japanese',
    'Jordanian',
    'Kenyan',
    'Laotian',
    'Latvian',
    'Lebanese',
    'Lithuanian',
    'Malaysian',
    'Mexican',
    'Moroccan',
    'Dutch',
    'New Zealander',
    'Nicaraguan',
    'Norwegian',
    'Panamanian',
    'Paraguayan',
    'Peruvian',
    'Filipino',
    'Polish',
    'Portuguese',
    'Puerto Rican',
    'Romanian',
    'Russian',
    'Saudi',
    'Scottish',
    'Korean',
    'Spanish',
    'Swedish',
    'Swiss',
    'Taiwanese',
    'Tajik',
    'Thai',
    'Turkish',
    'Ukrainian',
    'British',
    'American',
    'Uruguayan',
    'Venezuelan',
    'Vietnamese',
    'Welsh'


  ];


  Data = {
    HN: '',
    PatientFirstName: 'Navapop',
    PatientLastName: 'Viratigarn',
    gender: 'Male',
    MaritalStatus: 'Single',
    DOB: '',
    Occupation: '',

    Address: '',
    Nationality: 'Thai',
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
              private adminData: AdminData) { }

  ngOnInit() {
  }
  ClearDataInputTypeFile(id) {
    (<HTMLInputElement>document.getElementById(id)).value = '';
  }


  SubmitToApproveByAdmin() {
    let AttachFile: FileList = (<HTMLInputElement>document.getElementById('AttachFile')).files;

    console.log(AttachFile);

    let formData: FormData = new FormData();
    if (AttachFile.length > 0) {
      let file: File = AttachFile[0];
      formData.append('AttachFile', file, file.name);

    }
    formData.append('AgentData', JSON.stringify(this.adminData.userdetail));
    formData.append('Data', JSON.stringify(this.Data));
    this.appService.SubmitToApprove(formData, 'Id' + new Date().getTime()).subscribe(response => {
      console.log(response);
      this.route.navigate(['/AgentMainmenu']);

    });

  }

}
