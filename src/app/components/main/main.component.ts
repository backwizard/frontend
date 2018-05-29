declare var require: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public First_slide = require('../../shared/img/slideShow_1.png');
  public Second_slide = require('../../shared/img/slideShow_2.png');
  public Third_slide = require('../../shared/img/slideShow_3.png');
  constructor(  public route: Router) { }

  ngOnInit() {
  }

}
