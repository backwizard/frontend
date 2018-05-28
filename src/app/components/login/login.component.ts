import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { AdminData } from '../../AdminData';
import * as sha256 from 'sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private appService: AppService,
              public route: Router,
              private adminData: AdminData) { }

  ngOnInit() {
  }
  login() {

    this.username = 'agentuser1';
    this.password = '123456abc';
    if (this.password !== '') {
      this.appService.authenication(this.username, sha256(this.password)).subscribe(response => {
        console.log(response);
        this.adminData.userdetail.permission = response.Permission;
        this.adminData.userdetail.token = response.Token;
        this.adminData.userdetail.FullName = response.FullName;
        this.adminData.userdetail.tel = response.tel;
        this.adminData.userdetail.username = this.username;
        this.route.navigate(['/AgentMainmenu']);

      });
    } else {
      console.log('fail');

    }
  }
}
