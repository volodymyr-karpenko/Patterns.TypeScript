import { AbstractStrategy } from "./AbstractStrategy";

export class Context {

    public constructor(strategy: AbstractStrategy) {
        this.Strategy = strategy;
    }

    private Strategy: AbstractStrategy;

    public ContextInterface(): void {
        this.Strategy.AlgorithmInterface();
    }
}