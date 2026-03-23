import { PatternUseCase } from "../PatternUseCase";
import { ObjectStructure } from "./ObjectStructure";
import { ConcreteElementOne } from "./ConcreteElementOne";
import { ConcreteElementTwo } from "./ConcreteElementTwo";
import { ConcreteVisitorOne } from "./ConcreteVisitorOne";
import { ConcreteVisitorTwo } from "./ConcreteVisitorTwo";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const structure: ObjectStructure = new ObjectStructure();
    structure.add(new ConcreteElementOne());
    structure.add(new ConcreteElementTwo());
    structure.accept(new ConcreteVisitorOne());
    structure.accept(new ConcreteVisitorTwo());
  }
}
