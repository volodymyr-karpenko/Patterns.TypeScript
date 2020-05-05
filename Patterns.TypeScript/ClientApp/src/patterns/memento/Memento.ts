export class Memento {

    public constructor(state: string) {
        this._State = state;
    }

    private _State: string;

    public get State(): string {
        return this._State;
    }
}