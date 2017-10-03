import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef} from '@angular/core';
import {Month} from '../month';
import {Row} from '../row';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
    selector: 'app-balance-row-table',
    templateUrl: './balance-row-table.component.html',
    styleUrls: ['./balance-row-table.component.css']
})
export class BalanceRowTableComponent implements OnChanges {

    @Input() month: Month;

    private balance: number;
    private rows: Row[];

    public modalRef: BsModalRef;

    constructor(private modalService: BsModalService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.loadTableValues(changes.month.currentValue);
    }

    private debit(row: Row) {
        this.updateBalance(row, (a: number, b: number) => a - b);
    }

    private credit(row: Row) {
        this.updateBalance(row, (a: number, b: number) => a + b);
    }

    private updateBalance(row: Row, fn: (a: number, b: number) => number) {
        this.balance = fn(this.balance, row.value);
        row.isPayed = !row.isPayed;
    }

    private loadTableValues(month: Month) {
        this.rows = month.rows;
        this.balance = month.rows.filter(row => !row.isPayed)
            .map(row => row.value)
            .reduce((a, b) => a + b, 0);
    }

    private addToList(newValue: number) {
        this.rows.push(new Row(newValue, false));
        this.modalRef.hide();
    }

    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }
}
