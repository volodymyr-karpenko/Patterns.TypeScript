import { AbstractImplementor } from "./AbstractImplementor";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteImplementorTwo extends AbstractImplementor {
  operation(): void {
    PatternUseCase.output += ConcreteImplementorTwo.name + " => Operation\n\n";
  }
}
