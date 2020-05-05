import { AbstractElement } from "./AbstractElement";
import { AbstractVisitor } from "./AbstractVisitor";

export class ObjectStructure {

    private Elements: AbstractElement[] = [];

    public Add(element: AbstractElement): void {
        this.Elements.push(element);
    }

    public Remove(element: AbstractElement): void {
        this.Elements.splice(this.Elements.indexOf(element), 1);
    }

    public Accept(visitor: AbstractVisitor): void {
        this.Elements.forEach((element) => { element.Accept(visitor); });
    }
}