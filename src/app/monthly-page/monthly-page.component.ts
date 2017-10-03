import { Component, OnInit } from '@angular/core';
import {Month} from '../month';
import {Row} from '../row';

@Component({
  selector: 'app-monthly-page',
  templateUrl: './monthly-page.component.html',
  styleUrls: ['./monthly-page.component.css']
})
export class MonthlyPageComponent implements OnInit {
  private month: Month;

  constructor() { }

  ngOnInit() {
    const rows = [new Row(456, false), new Row(123, true), new Row(456, false), new Row(123, true), new Row(456, false)];
    this.month = new Month(rows);
  }

}
