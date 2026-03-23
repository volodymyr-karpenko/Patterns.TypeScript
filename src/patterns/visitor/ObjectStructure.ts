import { AbstractElement } from "./AbstractElement";
import { AbstractVisitor } from "./AbstractVisitor";

export class ObjectStructure {
  #elements: AbstractElement[] = [];

  add(element: AbstractElement): void {
    this.#elements.push(element);
  }

  remove(element: AbstractElement): void {
    this.#elements.splice(this.#elements.indexOf(element), 1);
  }

  accept(visitor: AbstractVisitor): void {
    this.#elements.forEach((element) => {
      element.accept(visitor);
    });
  }
}
