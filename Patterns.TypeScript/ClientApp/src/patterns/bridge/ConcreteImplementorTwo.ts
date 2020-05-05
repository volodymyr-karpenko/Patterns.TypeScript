import { AbstractImplementor } from "./AbstractImplementor";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteImplementorTwo extends AbstractImplementor {

    public Operation(): void {
        PatternUseCase.Output += ConcreteImplementorTwo.name + " => Operation \r\n\r\n";
    }
}