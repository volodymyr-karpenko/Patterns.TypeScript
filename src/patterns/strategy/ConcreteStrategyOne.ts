import { AbstractStrategy } from "./AbstractStrategy";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteStrategyOne extends AbstractStrategy {
  algorithmInterface(): void {
    PatternUseCase.output +=
      ConcreteStrategyOne.name + " => AlgorithmInterface\n\n";
  }
}
