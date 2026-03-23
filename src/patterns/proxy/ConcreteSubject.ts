import { AbstractSubject } from "./AbstractSubject";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteSubject extends AbstractSubject {
  request(): void {
    PatternUseCase.output += ConcreteSubject.name + " => Request\n\n";
  }
}
