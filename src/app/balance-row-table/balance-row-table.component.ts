import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Month} from '../month';
import {Row} from '../row';

@Component({
  selector: 'app-balance-row-table',
  templateUrl: './balance-row-table.component.html',
  styleUrls: ['./balance-row-table.component.css']
})
export class BalanceRowTableComponent implements OnInit, OnChanges {

  @Input() month: Month;
  @Output() balanceEmited = new EventEmitter();

  private balance: number;
  private rows: Row[];

  constructor() { }

  ngOnInit() {
    console.log(this.rows);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateTableValues(changes.month.currentValue);
  }

  // debit

  private updateTableValues(month: Month) {
    this.rows = month.rows;
    // this.balance =
  }
}
