import { Enumerable } from "./Enumerable";

export class Enumerator implements Iterator<unknown> {
  #enumerableObject: Enumerable;

  #index: number = -1;

  constructor(enumerable: Enumerable) {
    this.#enumerableObject = enumerable;
  }

  next(): IteratorResult<unknown> {
    if (this.#index < this.#enumerableObject.count - 1) {
      this.#index++;

      return {
        value: this.#enumerableObject.getItem(this.#index),
        done: false,
      };
    }

    this.#reset();

    return { value: null, done: true };
  }

  #reset(): void {
    this.#index = -1;
  }
}
