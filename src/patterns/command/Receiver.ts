import { PatternUseCase } from "../PatternUseCase";

export class Receiver {
  respondToCommand(): void {
    PatternUseCase.output += Receiver.name + " => RespondToCommand\n\n";
  }

  undoRespondToCommand(): void {
    PatternUseCase.output += Receiver.name + " => UndoRespondToCommand\n\n";
  }
}
