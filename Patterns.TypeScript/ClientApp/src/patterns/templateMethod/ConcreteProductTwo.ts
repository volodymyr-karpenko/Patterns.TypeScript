import { AbstractProduct } from "./AbstractProduct";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteProductTwo extends AbstractProduct {

    public CreatePartOne(): void {
        PatternUseCase.Output += ConcreteProductTwo.name + " => CreatePartOne \r\n\r\n";
    }

    public CreatePartTwo(): void {
        PatternUseCase.Output += ConcreteProductTwo.name + " => CreatePartTwo \r\n\r\n";
    }
}