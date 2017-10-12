import {Injectable} from '@angular/core';
import {Month} from '../month';

declare var require: any;

const Datastore = require('nedb');

@Injectable()
export class Database {
    public months: any;

    constructor () {
        this.months = new Datastore({
            filename: 'months.db' ,
            autoload: true });
    }

    dropAll() {
        return new Promise<Month>((resolve, reject) => {
            return this.months.remove({}, { multi: true }, ((err: any, newItem: any) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(newItem);
                }
            }));
        });
    }

    insert(item: Month) {
        if (!item.rows) {
            item.rows = [];
        }
        return new Promise<Month>((resolve, reject) => {
            return this.months.insert(item, ((err: any, newItem: any) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(newItem);
                }
            }));
        });
    }

    update(item: Month) {
        return new Promise<Month>((resolve, reject) => {
            return this.months.update(
                {_id: item._id}, item,
                {returnUpdatedDocs: true, upsert: true},
                ((err: any, num: any, newItem: any, upsert: any) => {
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
            return this.months.find({}, ((err: any, items: any) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(items);
                }
            }));
        });
    }

    findOne(id: string) {
        return new Promise<Month[]>((resolve, reject) => {
            return this.months.findOne({_id: id}, ((err: any, item: any) => {
                if ( err ) {
                    reject(err);
                } else {
                    resolve(item);
                }
            }));
        });
    }
}
