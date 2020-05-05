import { PatternUseCase } from "../PatternUseCase";
import { ObjectStructure } from "./ObjectStructure";
import { ConcreteElementOne } from "./ConcreteElementOne";
import { ConcreteElementTwo } from "./ConcreteElementTwo";
import { ConcreteVisitorOne } from "./ConcreteVisitorOne";
import { ConcreteVisitorTwo } from "./ConcreteVisitorTwo";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const structure: ObjectStructure = new ObjectStructure();
        structure.Add(new ConcreteElementOne());
        structure.Add(new ConcreteElementTwo());
        structure.Accept(new ConcreteVisitorOne());
        structure.Accept(new ConcreteVisitorTwo());
    }
}