export class Row {
    value: number;
    label: string;
    isPayed: boolean;

    constructor();
    constructor(value: number, label: string, isPayed: boolean)
    constructor(value?: any, label?: any, isPayed?: any) {
        this.value = value;
        this.label = label;
        this.isPayed = isPayed;
    }
}
