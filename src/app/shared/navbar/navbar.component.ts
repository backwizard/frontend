declare var require: any;

import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public logoImageUrl = require('../img/logo-h.png');
  constructor( public route: Router) {
  }
  ngOnInit() {
  }
  goToLogin() {
    this.route.navigate(['/Login']);
  }
}
