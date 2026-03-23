import { PatternUseCase } from "../PatternUseCase";
import { AbstractPrototype } from "./AbstractPrototype";
import { ConcretePrototypeOne } from "./ConcretePrototypeOne";
import { ConcretePrototypeTwo } from "./ConcretePrototypeTwo";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    let prototype: AbstractPrototype = new ConcretePrototypeOne(1);

    let clone: AbstractPrototype = prototype.clone();

    PatternUseCase.output +=
      prototype.constructor.name +
      " => Clone: " +
      clone.constructor.name +
      " Id = " +
      clone.id.toString() +
      "\n\n";

    prototype = new ConcretePrototypeTwo(2);

    clone = prototype.clone();

    PatternUseCase.output +=
      prototype.constructor.name +
      " => Clone: " +
      clone.constructor.name +
      " Id = " +
      clone.id.toString() +
      "\n\n";
  }
}
