import { AbstractObserver } from "./AbstractObserver";
import { AbstractSubject } from "./AbstractSubject";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteObserverOne extends AbstractObserver {
  #observerState: string = "";

  #subject: AbstractSubject;

  constructor(subject: AbstractSubject) {
    super();

    this.#subject = subject;
  }

  update(state: string): void {
    this.#observerState = state;

    PatternUseCase.output +=
      ConcreteObserverOne.name +
      ": State of " +
      this.#subject.constructor.name +
      " is " +
      this.#observerState +
      "\n\n";
  }
}
