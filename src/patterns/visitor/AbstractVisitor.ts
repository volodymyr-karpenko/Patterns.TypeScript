import { ConcreteElementOne } from "./ConcreteElementOne";
import { ConcreteElementTwo } from "./ConcreteElementTwo";

export abstract class AbstractVisitor {
  abstract visitElementOne(element: ConcreteElementOne): void;

  abstract visitElementTwo(element: ConcreteElementTwo): void;
}
