import { Receiver } from "./Receiver";

export abstract class AbstractCommand {
  protected receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  abstract execute(): void;

  abstract undoExecution(): void;
}
