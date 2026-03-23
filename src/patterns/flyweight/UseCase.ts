import { PatternUseCase } from "../PatternUseCase";
import { AbstractFlyweight } from "./AbstractFlyweight";
import { FlyweightFactory } from "./FlyweightFactory";
import { ConcreteFlyweightUnshared } from "./ConcreteFlyweightUnshared";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const extrinsicState: number = 0;

    let flyweight: AbstractFlyweight;
    const factory: FlyweightFactory = new FlyweightFactory();

    flyweight = factory.getFlyweight("1");
    flyweight.operation(extrinsicState);

    flyweight = factory.getFlyweight("10");
    flyweight.operation(extrinsicState);

    flyweight = new ConcreteFlyweightUnshared();
    flyweight.operation(extrinsicState);
  }
}
