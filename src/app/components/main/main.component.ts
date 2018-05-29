declare var require: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminData } from '../../AdminData';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public First_slide = require('../../shared/img/slideShow_1.png');
  public Second_slide = require('../../shared/img/slideShow_2.png');
  public Third_slide = require('../../shared/img/slideShow_3.png');
  doctorList;
  constructor(  public route: Router,
                private adminData: AdminData) { }

  ngOnInit() {
    this.doctorList = this.adminData.doctorList;
  }

}
