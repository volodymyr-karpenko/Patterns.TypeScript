import { AbstractPrototype } from "./AbstractPrototype";

export class ConcretePrototypeOne extends AbstractPrototype {
  constructor(id: number) {
    super(id);
  }

  clone(): AbstractPrototype {
    return new ConcretePrototypeOne(this.id);
  }
}
