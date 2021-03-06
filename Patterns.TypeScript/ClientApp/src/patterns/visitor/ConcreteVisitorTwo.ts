﻿import { AbstractVisitor } from "./AbstractVisitor";
import { ConcreteElementOne } from "./ConcreteElementOne";
import { ConcreteElementTwo } from "./ConcreteElementTwo";

export class ConcreteVisitorTwo extends AbstractVisitor {

    public VisitElementOne(element: ConcreteElementOne): void {
        element.OperationOne();
    }

    public VisitElementTwo(element: ConcreteElementTwo): void {
        element.OperationTwo();
    }
}