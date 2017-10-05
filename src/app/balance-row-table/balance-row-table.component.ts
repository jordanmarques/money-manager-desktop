import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef} from '@angular/core';
import {Month} from '../month';
import {Row} from '../row';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-balance-row-table',
    templateUrl: './balance-row-table.component.html',
    styleUrls: ['./balance-row-table.component.css']
})
export class BalanceRowTableComponent implements OnChanges, OnInit {
    @Input() month: Month;

    private balance: number;
    private rows: Row[];

    private newRowForm: FormGroup;
    public newRowModal: BsModalRef;

    constructor(private modalService: BsModalService) {
    }

    ngOnInit(): void {
        this.newRowForm = new FormGroup({
            value: new FormControl('', [Validators.required, Validators.min(1)]),
            label: new FormControl('', Validators.required)
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.loadTableValues(changes.month.currentValue);
    }

    private pay(row: Row) {
        this.debit(row);
        row.isPayed = true;
    }

    private cancel(row: Row) {
        this.credit(row);
        row.isPayed = false;
    }

    private debit(row: Row) {
        this.updateBalance(row, (a: number, b: number) => a - b);
    }

    private credit(row: Row) {
        this.updateBalance(row, (a: number, b: number) => a + b);
    }

    private updateBalance(row: Row, fn: (a: number, b: number) => number) {
        this.balance = fn(this.balance, row.value);
    }

    private loadTableValues(month: Month) {
        this.rows = month.rows;
        this.balance = this.computeBalance(month.rows);
    }

    private addToList() {
        const row = new Row(this.newRowForm.get('value').value, this.newRowForm.get('label').value , false);

        this.newRowForm.patchValue({['value']: null});
        this.newRowForm.patchValue({['label']: null});

        this.credit(row);
        this.rows.push(row);

        this.newRowModal.hide();
    }

    private computeBalance(rows: Row[]): number {
        return rows.filter(row => !row.isPayed)
            .map(row => row.value)
            .reduce((a, b) => a + b, 0);
    }

    private openModal(template: TemplateRef<any>) {
        this.newRowModal = this.modalService.show(template);
    }
}
