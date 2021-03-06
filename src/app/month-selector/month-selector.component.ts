import {Component, OnInit, EventEmitter, Output, TemplateRef} from '@angular/core';
import {Month} from '../month';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Database} from 'app/shared/database.service';

@Component({
    selector: 'app-month-selector',
    templateUrl: './month-selector.component.html',
    styleUrls: ['./month-selector.component.css'],
    providers: [Database]
})
export class MonthSelectorComponent implements OnInit {
    @Output() monthEmitter = new EventEmitter();

    private months: Month[];
    private selectedMonth: Month;

    private addMonthModal: BsModalRef;

    constructor(private modalService: BsModalService, private database: Database) {
    }

    ngOnInit() {
        this.months = [];
        this.database.findAll().then(months => {
            if (months && months.length !== 0) {
                this.months = this.sortByDate(months);
                this.setMonth(this.months[0]);
            } else {
                this.database.insert(new Month(new Date('2017-10-01'), [])).then(month => {
                    this.months.push(month);
                    this.setMonth(this.months[0]);
                });

            }
        });
    }

    private emitMonth(month: Month) {
        this.monthEmitter.emit(month);
    }

    private sortByDate(months: Month[]): Month[] {
        return months.sort((month1, month2) => month2.date.getTime() - month1.date.getTime());
    }

    private openModal(template: TemplateRef<any>) {
        this.addMonthModal = this.modalService.show(template);
    }

    private copyFromExistingMonth(monthToCopy: Month) {
        const nextMonthDate = this.getNextMonthDate(this.months[0].date);
        const month = new Month(nextMonthDate, monthToCopy.rows);

        this.database.update(month).then(monthSaved => {
            this.months.splice(0, 0, monthSaved);
            this.setMonth(monthSaved);
            this.addMonthModal.hide();
        });
    }

    private addEmptyMonth() {
        const nextMonthDate = this.getNextMonthDate(this.months[0].date);
        const month = new Month(nextMonthDate, []);

        this.database.update(month).then(monthSaved => {
            this.months.splice(0, 0, monthSaved);
            this.setMonth(monthSaved);
            this.addMonthModal.hide();
        });
    }

    private getNextMonthDate(date: Date): Date {
        date.setDate(1);
        return new Date(date.getFullYear(), date.getMonth() + 1, 1);
    }

    private setMonth(month: Month) {
        this.selectedMonth = month;
        this.emitMonth(month);
    }
}
