import { AbstractElement } from "./AbstractElement";
import { AbstractVisitor } from "./AbstractVisitor";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteElementOne extends AbstractElement {

    public Accept(visitor: AbstractVisitor): void {
        visitor.VisitElementOne(this);
    }

    public OperationOne(): void {
        PatternUseCase.Output += ConcreteElementOne.name + " => OperationOne \r\n\r\n";
    }
}