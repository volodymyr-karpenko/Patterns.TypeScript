import { AbstractStrategy } from "./AbstractStrategy";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteStrategyTwo extends AbstractStrategy {
  algorithmInterface(): void {
    PatternUseCase.output +=
      ConcreteStrategyTwo.name + " => AlgorithmInterface\n\n";
  }
}
