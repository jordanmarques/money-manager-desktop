import {Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import {Month} from '../month';
import {Row} from '../row';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Database} from '../shared/database.service';

@Component({
    selector: 'app-balance-row-table',
    templateUrl: './balance-row-table.component.html',
    styleUrls: ['./balance-row-table.component.css'],
    providers: [Database]
})
export class BalanceRowTableComponent implements OnChanges, OnInit {
    @Input() month: Month;

    private balance: number;
    private displayedMonth: Month;

    private newRowForm: FormGroup;
    public newRowModal: BsModalRef;

    constructor(private modalService: BsModalService, private database: Database) {}

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
        this.balance = this.computeBalance(this.displayedMonth.rows);
    }

    private cancel(row: Row) {
        row.isPayed = false;
        this.balance = this.computeBalance(this.displayedMonth.rows);
    }

    private remove(row: Row) {
        if (confirm('Supprimer cette valeur ?')) {
            const index = this.displayedMonth.rows.indexOf(row, 0);
            if (index > -1) {
                this.displayedMonth.rows.splice(index, 1);
                this.database.update(this.displayedMonth);
                this.balance = this.computeBalance(this.displayedMonth.rows);
            }
        }
    }

    private loadTableValues(month: Month) {
        if (!month) {
            return;
        }
        this.displayedMonth = month;
        this.balance = this.computeBalance(this.displayedMonth.rows);
    }

    private addToList() {
        const row = new Row(this.newRowForm.get('value').value, this.newRowForm.get('label').value , false);

        this.newRowForm.patchValue({['value']: null});
        this.newRowForm.patchValue({['label']: null});

        this.displayedMonth.rows.push(row);
        this.database.update(this.displayedMonth);
        this.balance = this.computeBalance(this.displayedMonth.rows);

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
