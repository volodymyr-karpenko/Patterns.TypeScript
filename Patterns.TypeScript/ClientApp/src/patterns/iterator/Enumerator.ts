import { Enumerable } from "./Enumerable";

export class Enumerator implements Iterator<any> {

    public constructor(enumerable: Enumerable) {
        this.EnumerableObject = enumerable;
    }

    private EnumerableObject: Enumerable;    

    private Index: number = -1;    

    public next(): IteratorResult<any> {
        if (this.Index < this.EnumerableObject.Count - 1) {
            this.Index++;

            return { value: this.EnumerableObject.GetItem(this.Index), done: false };
        }

        this.Reset();
        return { value: null, done: true };
    };

    private Reset(): void {
        this.Index = -1;
    }
}