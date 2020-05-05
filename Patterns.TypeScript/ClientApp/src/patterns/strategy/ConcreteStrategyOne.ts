import { AbstractStrategy } from "./AbstractStrategy";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteStrategyOne extends AbstractStrategy {

    public AlgorithmInterface(): void {
        PatternUseCase.Output += ConcreteStrategyOne.name + " => AlgorithmInterface \r\n\r\n";
    }
}