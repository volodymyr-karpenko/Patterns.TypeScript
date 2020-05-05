import { AbstractObserver } from "./AbstractObserver";
import { AbstractSubject } from "./AbstractSubject";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteObserverOne extends AbstractObserver {

    public constructor(subject: AbstractSubject) {
        super();

        this.Subject = subject;
    }

    private ObserverState: string = "";

    private Subject: AbstractSubject;

    public Update(state: string): void {
        this.ObserverState = state;
        PatternUseCase.Output += ConcreteObserverOne.name + ": State of " + this.Subject.constructor.name + " is " + this.ObserverState + "\r\n\r\n";
    }
}