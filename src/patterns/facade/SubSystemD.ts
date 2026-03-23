import { PatternUseCase } from "../PatternUseCase";

export class SubSystemD {
  operationD(): void {
    PatternUseCase.output += SubSystemD.name + " => OperationD\n\n";
  }
}
