import { AbstractSubject } from "./AbstractSubject";
import { ConcreteSubject } from "./ConcreteSubject";

export class Proxy extends AbstractSubject {
  #subject?: AbstractSubject;

  request(): void {
    if (!this.#subject) {
      this.#subject = new ConcreteSubject();
    }

    this.#subject.request();
  }
}
