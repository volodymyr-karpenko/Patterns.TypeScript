import { AbstractObserver } from "./AbstractObserver";

export abstract class AbstractSubject {

    private Observers: AbstractObserver[] = [];

    public abstract State: string;

    public Attach(observer: AbstractObserver): void {
        this.Observers.push(observer);
    }

    public Detach(observer: AbstractObserver): void {
        this.Observers.splice(this.Observers.indexOf(observer), 1);
    }

    public Notify(): void {
        this.Observers.forEach((item) => { item.Update(this.State); });
    }
}