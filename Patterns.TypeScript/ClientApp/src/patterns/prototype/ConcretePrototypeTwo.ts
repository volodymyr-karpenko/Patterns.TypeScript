import { AbstractPrototype } from "./AbstractPrototype";

export class ConcretePrototypeTwo extends AbstractPrototype {

    public constructor(id: number) {
        super(id);
    }

    public Clone(): AbstractPrototype {
        return new ConcretePrototypeTwo(this.Id);
    }
}