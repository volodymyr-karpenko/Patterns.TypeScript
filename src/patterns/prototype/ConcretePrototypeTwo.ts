import { AbstractPrototype } from "./AbstractPrototype";

export class ConcretePrototypeTwo extends AbstractPrototype {
  constructor(id: number) {
    super(id);
  }

  clone(): AbstractPrototype {
    return new ConcretePrototypeTwo(this.id);
  }
}
