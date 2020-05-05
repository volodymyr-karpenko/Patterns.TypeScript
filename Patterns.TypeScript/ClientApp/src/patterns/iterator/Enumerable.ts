import { Enumerator } from "./Enumerator";

export class Enumerable implements Iterable<any> {

    private _Items: any[] = [];   

    public get Count(): number {
        return this._Items.length;
    }

    public GetItem(index: number): any {
        return this._Items[index];
    }

    public SetItem(index: number, value: any): void {
        this._Items[index] = value;
    }

    [Symbol.iterator](): Iterator<any> {
        return new Enumerator(this);
    }
}