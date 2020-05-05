export class Singleton {

    private constructor() {

    }

    private static _UniqueInstance?: Singleton;

    public static get Instance(): Singleton {
        if (!this._UniqueInstance) {
            this._UniqueInstance = new Singleton();
        }

        return this._UniqueInstance;
    }
}