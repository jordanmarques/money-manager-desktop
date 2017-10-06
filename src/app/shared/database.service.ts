import {Injectable} from '@angular/core';
import {Month} from "../month";

declare var require: any;

const Datastore = require('nedb');
const dataB = 'database.db';

@Injectable()
export class Database {
    public db: any;

    constructor () {
        this.db = new Datastore({
            filename: dataB ,
            autoload: true });
    }

    insert(item: Month) {
        return new Promise<Month>((resolve, reject) => {
            return this.db.insert(item, ((err: any, newItem: Month) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(newItem);
                }
            }));
        });
    }

    findAll() {
        return new Promise<Month[]>((resolve, reject) => {
            return this.db.find({}, ((err: any, items: any) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(items);
                }
            }));
        });
    }
}
