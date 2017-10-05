import {Component, OnInit, EventEmitter, Output, TemplateRef, OnChanges, SimpleChanges} from '@angular/core';
import {Month} from '../month';
import {Row} from 'app/row';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
    selector: 'app-month-selector',
    templateUrl: './month-selector.component.html',
    styleUrls: ['./month-selector.component.css']
})
export class MonthSelectorComponent implements OnInit {
    @Output() monthEmitter = new EventEmitter();

    private months: Month[];

    private selectedMonth: Month;
    public addMonthModal: BsModalRef;
    constructor(private modalService: BsModalService) {}

    ngOnInit() {
        this.months = this.sortByDate([
            new Month(new Date('2015-01-10'), [
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false)
            ]),
            new Month(new Date('2014-05-10'), [
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false)
            ]),
            new Month(new Date('2017-02-10'), [
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false)
            ]),
            new Month(new Date('2017-03-10'), [
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false)
            ]),
            new Month(new Date('2017-04-10'), [
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false)
            ]),
            new Month(new Date('2017-05-10'), [
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false),
                new Row(123, 'test1', true),
                new Row(456, 'test1', false)
            ])
        ]);
        this.setMonth(this.months[0]);
    }

    private emitMonth(month: Month) {
        this.monthEmitter.emit(month);
    }

    private sortByDate(months: Month[]): Month[] {
        return months.sort((month1, month2) => month1.date.getTime() < month2.date.getTime() ? 1 : 0);
    }

    private openModal(template: TemplateRef<any>) {
        this.addMonthModal = this.modalService.show(template);
    }

    private copyFromExistingMonth(monthToCopy: Month) {
        const nextMonthDate = this.getNextMonthDate(this.months[0].date);
        const month = new Month(nextMonthDate, monthToCopy.rows );

        this.months.splice(0, 0, month);

        this.setMonth(month);

        this.addMonthModal.hide();
    }

    private addEmptyMonth() {
        const nextMonthDate = this.getNextMonthDate(this.months[0].date);
        const month = new Month(nextMonthDate, [] );

        this.months.splice(0, 0, month);

        this.setMonth(month);

        this.addMonthModal.hide();
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
