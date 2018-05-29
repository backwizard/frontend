import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  authenication(id, password) {
    return this.http.post('http://localhost:3000/authenication', {
      'username': id,
      'password': password
    })
      .map(res => res.json());
  }

  getPatientList(username) {
    return this.http.get(`http://localhost:3000/getPatientList/${username}`)
      .map(res => res.json());
  }

  getHospitalList() {
    return this.http.get(`http://localhost:3000/getHospitalList`)
      .map(res => res.json());
  }

  getPaient(id) {
    return this.http.get(`http://localhost:3000/getPaient/${id}`)
      .map(res => res.json());
  }

  SubmitToApprove(data,id){
    return this.http.post(`http://localhost:3000/SubmitToApprove/${id}`, data)
      .map(res => res.json());

  }
  SendAppointmentToHospital(id,data){
    return this.http.post(`http://localhost:3000/SendAppointmentToHospital/${id}`,data)
      .map(res => res.json());

  }


  Approve(data,id){
    return this.http.post(`http://localhost:3000/Approve/${id}`, data)
      .map(res => res.json());

  }


}
