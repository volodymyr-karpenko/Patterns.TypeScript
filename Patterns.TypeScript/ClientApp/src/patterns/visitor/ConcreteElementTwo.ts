import { AbstractElement } from "./AbstractElement";
import { AbstractVisitor } from "./AbstractVisitor";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteElementTwo extends AbstractElement {

    public Accept(visitor: AbstractVisitor): void {
        visitor.VisitElementTwo(this);
    }

    public OperationTwo(): void {
        PatternUseCase.Output += ConcreteElementTwo.name + " => OperationTwo \r\n\r\n";
    }
}