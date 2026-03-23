import { Memento } from "./Memento";

export class Originator {
  state: string = "";

  setMemento(memento: Memento): void {
    this.state = memento.state;
  }

  createMemento(): Memento {
    return new Memento(this.state);
  }
}
