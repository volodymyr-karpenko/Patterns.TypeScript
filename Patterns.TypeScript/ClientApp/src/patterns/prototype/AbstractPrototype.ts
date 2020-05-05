export abstract class AbstractPrototype {

    public constructor(id: number) {
        this._Id = id;
    }

    private _Id: number;

    public get Id(): number {
        return this._Id;
    }

    public abstract Clone(): AbstractPrototype;
}