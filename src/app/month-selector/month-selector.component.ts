import {Component, OnInit} from '@angular/core';
import {Month} from '../month';
import {Row} from 'app/row';

@Component({
    selector: 'app-month-selector',
    templateUrl: './month-selector.component.html',
    styleUrls: ['./month-selector.component.css']
})
export class MonthSelectorComponent implements OnInit {

    private months: Month[];

    constructor() {
    }

    ngOnInit() {
        const rows = [
            new Row(456, 'test1', false),
            new Row(123, 'test1', true),
            new Row(456, 'test1', false),
            new Row(123, 'test1', true),
            new Row(456, 'test1', false)
        ];
        this.months = [
            new Month(new Date('2015-01-10'), rows),
            new Month(new Date('2014-05-10'), rows),
            new Month(new Date('2017-02-10'), rows),
            new Month(new Date('2017-03-10'), rows),
            new Month(new Date('2017-04-10'), rows),
            new Month(new Date('2017-05-10'), rows)
        ];
    }

}
