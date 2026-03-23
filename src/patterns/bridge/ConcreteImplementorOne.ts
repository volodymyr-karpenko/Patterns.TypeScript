import { AbstractImplementor } from "./AbstractImplementor";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteImplementorOne extends AbstractImplementor {
  operation(): void {
    PatternUseCase.output += ConcreteImplementorOne.name + " => Operation\n\n";
  }
}
