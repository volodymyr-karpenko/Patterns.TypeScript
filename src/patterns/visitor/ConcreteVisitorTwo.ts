import { AbstractVisitor } from "./AbstractVisitor";
import { ConcreteElementOne } from "./ConcreteElementOne";
import { ConcreteElementTwo } from "./ConcreteElementTwo";

export class ConcreteVisitorTwo extends AbstractVisitor {
  visitElementOne(element: ConcreteElementOne): void {
    element.operationOne();
  }

  visitElementTwo(element: ConcreteElementTwo): void {
    element.operationTwo();
  }
}
