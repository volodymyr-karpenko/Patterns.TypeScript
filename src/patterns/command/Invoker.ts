import { AbstractCommand } from "./AbstractCommand";

export class Invoker {
  executedCommands: AbstractCommand[] = [];

  executeCommand(command: AbstractCommand): void {
    command.execute();
    this.executedCommands.push(command);
  }

  undoLastCommand(): void {
    if (this.executedCommands.length < 1) {
      return;
    }

    this.executedCommands[this.executedCommands.length - 1]?.undoExecution();
    this.executedCommands.pop();
  }
}
