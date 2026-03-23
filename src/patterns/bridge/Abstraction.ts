import { AbstractImplementor } from "./AbstractImplementor";

export abstract class Abstraction {
  protected implementor: AbstractImplementor;

  constructor(implementor: AbstractImplementor) {
    this.implementor = implementor;
  }

  operation(): void {
    this.implementor.operation();
  }
}
