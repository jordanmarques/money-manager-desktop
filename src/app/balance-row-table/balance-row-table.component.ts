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
    private date: Date;
    private rows: Row[];

    private newRowForm: FormGroup;
    public newRowModal: BsModalRef;

    constructor(private modalService: BsModalService) {}

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
        row.isPayed = true;
        this.balance = this.computeBalance(this.rows);
    }

    private cancel(row: Row) {
        row.isPayed = false;
        this.balance = this.computeBalance(this.rows);
    }

    private remove(row: Row) {
        if (confirm('Supprimer cette valeur ?')) {
            const index = this.rows.indexOf(row, 0);
            if (index > -1) {
                this.rows.splice(index, 1);
                this.balance = this.computeBalance(this.rows);
            }
        }
    }

    private loadTableValues(month: Month) {
        if (!month) {
            return;
        }
        this.rows = month.rows ? month.rows : [];
        this.date = month.date;
        this.balance = this.computeBalance(month.rows);
    }

    private addToList() {
        const row = new Row(this.newRowForm.get('value').value, this.newRowForm.get('label').value , false);

        this.newRowForm.patchValue({['value']: null});
        this.newRowForm.patchValue({['label']: null});

        this.rows.push(row);
        this.balance = this.computeBalance(this.rows);

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
