import { AbstractVisitor } from "./AbstractVisitor";

export abstract class AbstractElement {

    public abstract Accept(visitor: AbstractVisitor): void;
}