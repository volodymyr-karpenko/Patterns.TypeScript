import { PatternUseCase } from "../PatternUseCase";

export class SubSystemB {

    public OperationB(): void {
        PatternUseCase.Output += SubSystemB.name + " => OperationB \r\n\r\n";
    }
}