import {Row} from './row';

export class Month {
    date: Date;
    rows: Row[];

    constructor()
    constructor(date: Date, rows: Row[])
    constructor(date?: any, rows?: any) {
        this.date = date || new Date('1970-01-01');
        this.rows = rows || [];
    }
}
