import { ConcreteElementOne } from "./ConcreteElementOne";
import { ConcreteElementTwo } from "./ConcreteElementTwo";

export abstract class AbstractVisitor {

    public abstract VisitElementOne(element: ConcreteElementOne): void;

    public abstract VisitElementTwo(element: ConcreteElementTwo): void;
}