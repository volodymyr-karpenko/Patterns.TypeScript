import { AbstractStrategy } from "./AbstractStrategy";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteStrategyTwo extends AbstractStrategy {

    public AlgorithmInterface(): void {
        PatternUseCase.Output += ConcreteStrategyTwo.name + " => AlgorithmInterface \r\n\r\n";
    }
}