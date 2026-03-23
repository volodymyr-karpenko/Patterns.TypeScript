export abstract class AbstractPrototype {
  #id: number;

  constructor(id: number) {
    this.#id = id;
  }

  get id(): number {
    return this.#id;
  }

  abstract clone(): AbstractPrototype;
}
