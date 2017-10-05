import {Row} from './row';

export class Month {
    date: Date;
    rows: Row[];

    constructor(date: Date, rows: Row[]) {
        this.date = date;
        this.rows = rows;
    }
}
