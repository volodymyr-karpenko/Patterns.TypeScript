import { AbstractPrototype } from "./AbstractPrototype";

export class ConcretePrototypeOne extends AbstractPrototype {

    public constructor(id: number) {
        super(id);
    }

    public Clone(): AbstractPrototype {
        return new ConcretePrototypeOne(this.Id);
    }
}