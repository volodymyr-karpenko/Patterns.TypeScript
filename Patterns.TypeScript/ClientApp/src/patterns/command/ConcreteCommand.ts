import { AbstractCommand } from "./AbstractCommand";
import { Receiver } from "./Receiver";

export class ConcreteCommand extends AbstractCommand {

    public constructor(receiver: Receiver) {
        super(receiver);
    }

    public Execute(): void {
        this.Receiver.RespondToCommand();
    }

    public UndoExecution(): void {
        this.Receiver.UndoRespondToCommand();
    }   
}