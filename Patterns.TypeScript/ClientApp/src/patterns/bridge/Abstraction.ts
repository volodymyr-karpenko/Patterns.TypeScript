import { AbstractImplementor } from "./AbstractImplementor";

export abstract class Abstraction {

    public constructor(implementor: AbstractImplementor) {
        this.Implementor = implementor;
    }

    protected Implementor: AbstractImplementor;

    public Operation(): void {
        this.Implementor.Operation();
    }
}