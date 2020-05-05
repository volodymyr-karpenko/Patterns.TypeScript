import { PatternUseCase } from "../PatternUseCase";

export class SubSystemA {

    public OperationA(): void {
        PatternUseCase.Output += SubSystemA.name + " => OperationA \r\n\r\n";
    }
}