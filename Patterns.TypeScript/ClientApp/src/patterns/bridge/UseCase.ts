import { PatternUseCase } from "../PatternUseCase";
import { RefinedAbstraction } from "./RefinedAbstraction";
import { ConcreteImplementorOne } from "./ConcreteImplementorOne";
import { Abstraction } from "./Abstraction";
import { AbstractImplementor } from "./AbstractImplementor";
import { ConcreteImplementorTwo } from "./ConcreteImplementorTwo";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        let implementor: AbstractImplementor = new ConcreteImplementorOne();
        let bridge: Abstraction = new RefinedAbstraction(implementor);
        bridge.Operation();

        implementor = new ConcreteImplementorTwo();
        bridge = new RefinedAbstraction(implementor);
        bridge.Operation();
    }
}