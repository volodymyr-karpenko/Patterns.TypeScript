import { AbstractVisitor } from "./AbstractVisitor";

export abstract class AbstractElement {
  abstract accept(visitor: AbstractVisitor): void;
}
