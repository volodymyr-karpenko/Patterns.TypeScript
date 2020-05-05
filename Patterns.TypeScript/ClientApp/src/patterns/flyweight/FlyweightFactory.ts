import { AbstractFlyweight } from "./AbstractFlyweight";
import { ConcreteFlyweightShared } from "./ConcreteFlyweightShared";

export class FlyweightFactory {

    public constructor() {
        this.Pool["1"] = new ConcreteFlyweightShared();
    }

    private Pool: { [key: string]: AbstractFlyweight; } = {};

    public GetFlyweight(key: string): AbstractFlyweight {
        if (!this.Pool[key]) {
            this.Pool[key] = new ConcreteFlyweightShared();
        }

        return this.Pool[key] as AbstractFlyweight;
    }
}