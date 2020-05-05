import { PatternUseCase } from "../PatternUseCase";

export class Receiver {

    public RespondToCommand(): void {
        PatternUseCase.Output += Receiver.name + " => RespondToCommand \r\n\r\n";
    }

    public UndoRespondToCommand(): void {
        PatternUseCase.Output += Receiver.name + " => UndoRespondToCommand \r\n\r\n";
    }
}