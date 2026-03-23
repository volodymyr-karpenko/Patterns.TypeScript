import { AbstractElement } from "./AbstractElement";
import { AbstractVisitor } from "./AbstractVisitor";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteElementOne extends AbstractElement {
  accept(visitor: AbstractVisitor): void {
    visitor.visitElementOne(this);
  }

  operationOne(): void {
    PatternUseCase.output += ConcreteElementOne.name + " => OperationOne\n\n";
  }
}
