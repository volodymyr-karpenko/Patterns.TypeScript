import { AbstractImplementor } from "./AbstractImplementor";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteImplementorOne extends AbstractImplementor {

    public Operation(): void {
        PatternUseCase.Output += ConcreteImplementorOne.name + " => Operation \r\n\r\n";
    }
}