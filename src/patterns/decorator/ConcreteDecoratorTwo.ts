import { AbstractDecorator } from "./AbstractDecorator";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteDecoratorTwo extends AbstractDecorator {
  #addedBehavior(): void {
    PatternUseCase.output += "Added Behavior\n\n";
  }

  operation(): void {
    super.operation();

    this.#addedBehavior();
  }
}
