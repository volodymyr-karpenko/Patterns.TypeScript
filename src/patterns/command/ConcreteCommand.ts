import { AbstractCommand } from "./AbstractCommand";
import { Receiver } from "./Receiver";

export class ConcreteCommand extends AbstractCommand {
  constructor(receiver: Receiver) {
    super(receiver);
  }

  execute(): void {
    this.receiver.respondToCommand();
  }

  undoExecution(): void {
    this.receiver.undoRespondToCommand();
  }
}
