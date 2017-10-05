export class Row {
    value: number;
    label: string;
    isPayed: boolean;

    constructor(value: number, label: string, isPayed: boolean) {
        this.value = value;
        this.label = label;
        this.isPayed = isPayed;
    }
}
