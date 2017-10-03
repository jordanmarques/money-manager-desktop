import {Row} from './row';

export class Month {
    date: Date;
    rows: Row[];

    constructor(rows: Row[]) {
        this.rows = rows;
    }
}
