import { AbstractDecorator } from "./AbstractDecorator";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteDecoratorOne extends AbstractDecorator {
  #addedState: string = "Added State";

  operation(): void {
    super.operation();

    PatternUseCase.output += this.#addedState + "\n\n";
  }
}
