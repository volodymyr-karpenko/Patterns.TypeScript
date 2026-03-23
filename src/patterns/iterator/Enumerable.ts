import { Enumerator } from "./Enumerator";

export class Enumerable implements Iterable<unknown> {
  #items: unknown[] = [];

  get count(): number {
    return this.#items.length;
  }

  getItem(index: number): unknown {
    return this.#items[index];
  }

  setItem(index: number, value: unknown): void {
    this.#items[index] = value;
  }

  [Symbol.iterator](): Iterator<unknown> {
    return new Enumerator(this);
  }
}
