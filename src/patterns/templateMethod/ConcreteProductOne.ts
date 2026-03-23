import { AbstractProduct } from "./AbstractProduct";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteProductOne extends AbstractProduct {
  createPartOne(): void {
    PatternUseCase.output += ConcreteProductOne.name + " => CreatePartOne\n\n";
  }

  createPartTwo(): void {
    PatternUseCase.output += ConcreteProductOne.name + " => CreatePartTwo\n\n";
  }
}
