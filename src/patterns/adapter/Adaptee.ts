import { PatternUseCase } from "../PatternUseCase";

export class Adaptee {
  specificRequest(): void {
    PatternUseCase.output += Adaptee.name + " => SpecificRequest\n\n";
  }
}
