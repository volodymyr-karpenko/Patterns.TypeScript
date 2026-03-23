import { AbstractStrategy } from "./AbstractStrategy";

export class Context {
  #strategy: AbstractStrategy;

  constructor(strategy: AbstractStrategy) {
    this.#strategy = strategy;
  }

  contextInterface(): void {
    this.#strategy.algorithmInterface();
  }
}
