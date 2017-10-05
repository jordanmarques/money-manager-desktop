import {Row} from './row';

export class Month {
    date: Date;
    rows: Row[];

    constructor()
    constructor(date: Date, rows: Row[])
    constructor(date?: any, rows?: any) {
        this.date = date ;
        this.rows = rows || [];
    }
}
