import { AbstractCommand } from "./AbstractCommand";

export class Invoker {

    public ExecutedCommands: AbstractCommand[] = [];

    public ExecuteCommand(command: AbstractCommand): void {
        command.Execute();
        this.ExecutedCommands.push(command);
    }

    public UndoLastCommand(): void {
        if (this.ExecutedCommands.length < 1) {
            return;
        }

        this.ExecutedCommands[this.ExecutedCommands.length - 1].UndoExecution();
        this.ExecutedCommands.pop();
    }
}