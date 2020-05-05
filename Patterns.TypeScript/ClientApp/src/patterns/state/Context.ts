import { AbstractState } from "./AbstractState";

export class Context {

    public constructor(state: AbstractState) {
        this.State = state;
    }

    public State: AbstractState;

    public Request(): void {
        this.State.Handle(this);
    }
}