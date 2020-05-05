import { Receiver } from "./Receiver";

export abstract class AbstractCommand {

    public constructor(receiver: Receiver) {
        this.Receiver = receiver;
    }

    protected Receiver: Receiver;

    public abstract Execute(): void;

    public abstract UndoExecution(): void;
}