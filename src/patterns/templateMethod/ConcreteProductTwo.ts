import { AbstractProduct } from "./AbstractProduct";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteProductTwo extends AbstractProduct {
  createPartOne(): void {
    PatternUseCase.output += ConcreteProductTwo.name + " => CreatePartOne\n\n";
  }

  createPartTwo(): void {
    PatternUseCase.output += ConcreteProductTwo.name + " => CreatePartTwo\n\n";
  }
}
