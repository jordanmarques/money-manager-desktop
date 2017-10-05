import {Component, OnInit} from '@angular/core';
import {Month} from '../month';

@Component({
  selector: 'app-monthly-page',
  templateUrl: './monthly-page.component.html',
  styleUrls: ['./monthly-page.component.css']
})
export class MonthlyPageComponent implements OnInit {


  private month: Month;

  constructor() { }

  ngOnInit() {
    this.month = new Month();
  }
}
