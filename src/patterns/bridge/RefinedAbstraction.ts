import { Abstraction } from "./Abstraction";
import { AbstractImplementor } from "./AbstractImplementor";
import { PatternUseCase } from "../PatternUseCase";

export class RefinedAbstraction extends Abstraction {
  constructor(implementor: AbstractImplementor) {
    super(implementor);
  }

  operation(): void {
    // Add behavior
    PatternUseCase.output +=
      "RefinedAbstraction => Add behavior BEFORE operation from Implementor\n\n";

    super.operation();

    // Add behavior
    PatternUseCase.output +=
      "RefinedAbstraction => Add behavior AFTER operation from Implementor\n\n";
  }
}
