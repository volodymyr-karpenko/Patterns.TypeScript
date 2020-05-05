import { PatternUseCase } from "../PatternUseCase";

export class SubSystemC {

    public OperationC(): void {
        PatternUseCase.Output += SubSystemC.name + " => OperationC \r\n\r\n";
    }
}