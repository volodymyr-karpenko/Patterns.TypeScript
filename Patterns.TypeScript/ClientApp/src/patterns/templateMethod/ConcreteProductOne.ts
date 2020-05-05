import { AbstractProduct } from "./AbstractProduct";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteProductOne extends AbstractProduct {

    public CreatePartOne(): void {
        PatternUseCase.Output += ConcreteProductOne.name + " => CreatePartOne \r\n\r\n";
    }

    public CreatePartTwo(): void {
        PatternUseCase.Output += ConcreteProductOne.name + " => CreatePartTwo \r\n\r\n";
    }
}