export class Memento {
  #state: string;

  constructor(state: string) {
    this.#state = state;
  }

  get state(): string {
    return this.#state;
  }
}
