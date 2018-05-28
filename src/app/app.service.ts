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



}
