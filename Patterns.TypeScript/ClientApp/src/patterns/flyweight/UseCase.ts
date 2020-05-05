import { PatternUseCase } from "../PatternUseCase";
import { AbstractFlyweight } from "./AbstractFlyweight";
import { FlyweightFactory } from "./FlyweightFactory";
import { ConcreteFlyweightUnshared } from "./ConcreteFlyweightUnshared";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const extrinsicState: number = 0;

        let flyweight: AbstractFlyweight;
        const factory: FlyweightFactory = new FlyweightFactory();

        flyweight = factory.GetFlyweight("1");
        flyweight.Operation(extrinsicState);

        flyweight = factory.GetFlyweight("10");
        flyweight.Operation(extrinsicState);

        flyweight = new ConcreteFlyweightUnshared();
        flyweight.Operation(extrinsicState);
    }
}