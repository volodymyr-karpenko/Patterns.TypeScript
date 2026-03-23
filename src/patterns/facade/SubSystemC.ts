import { PatternUseCase } from "../PatternUseCase";

export class SubSystemC {
  operationC(): void {
    PatternUseCase.output += SubSystemC.name + " => OperationC\n\n";
  }
}
