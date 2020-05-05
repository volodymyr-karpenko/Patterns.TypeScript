import { Memento } from "./Memento";

export class Originator {

    public State: string = "";

    public SetMemento(memento: Memento): void {
        this.State = memento.State;
    }

    public CreateMemento(): Memento {
        return new Memento(this.State);
    }
}