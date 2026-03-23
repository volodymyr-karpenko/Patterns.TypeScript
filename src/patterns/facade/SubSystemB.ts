import { PatternUseCase } from "../PatternUseCase";

export class SubSystemB {
  operationB(): void {
    PatternUseCase.output += SubSystemB.name + " => OperationB\n\n";
  }
}
