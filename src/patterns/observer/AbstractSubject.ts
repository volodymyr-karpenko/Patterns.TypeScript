import { AbstractObserver } from "./AbstractObserver";

export abstract class AbstractSubject {
  #observers: AbstractObserver[] = [];

  abstract state: string;

  attach(observer: AbstractObserver): void {
    this.#observers.push(observer);
  }

  detach(observer: AbstractObserver): void {
    this.#observers.splice(this.#observers.indexOf(observer), 1);
  }

  notify(): void {
    this.#observers.forEach((item) => {
      item.update(this.state);
    });
  }
}
