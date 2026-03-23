import { AbstractElement } from "./AbstractElement";
import { AbstractVisitor } from "./AbstractVisitor";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteElementTwo extends AbstractElement {
  accept(visitor: AbstractVisitor): void {
    visitor.visitElementTwo(this);
  }

  operationTwo(): void {
    PatternUseCase.output += ConcreteElementTwo.name + " => OperationTwo\n\n";
  }
}
