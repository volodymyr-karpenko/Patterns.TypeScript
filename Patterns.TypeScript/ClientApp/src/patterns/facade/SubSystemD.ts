import { PatternUseCase } from "../PatternUseCase";

export class SubSystemD {

    public OperationD(): void {
        PatternUseCase.Output += SubSystemD.name + " => OperationD \r\n\r\n";
    }
}