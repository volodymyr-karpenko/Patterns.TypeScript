import { PatternUseCase } from "../PatternUseCase";
import { AbstractPrototype } from "./AbstractPrototype";
import { ConcretePrototypeOne } from "./ConcretePrototypeOne";
import { ConcretePrototypeTwo } from "./ConcretePrototypeTwo";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        let prototype: AbstractPrototype = new ConcretePrototypeOne(1);
        let clone: AbstractPrototype = prototype.Clone();  
        
        PatternUseCase.Output += prototype.constructor.name + " => Clone: " + clone.constructor.name + " Id = " + clone.Id.toString() + "\r\n\r\n";

        prototype = new ConcretePrototypeTwo(2);
        clone = prototype.Clone();

        PatternUseCase.Output += prototype.constructor.name + " => Clone: " + clone.constructor.name + " Id = " + clone.Id.toString() + "\r\n\r\n";
    }
}