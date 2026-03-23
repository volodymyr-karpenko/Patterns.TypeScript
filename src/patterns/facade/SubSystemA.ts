import { PatternUseCase } from "../PatternUseCase";

export class SubSystemA {
  operationA(): void {
    PatternUseCase.output += SubSystemA.name + " => OperationA\n\n";
  }
}
