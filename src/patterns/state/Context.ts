import { AbstractState } from "./AbstractState";

export class Context {
  state: AbstractState;

  constructor(state: AbstractState) {
    this.state = state;
  }

  request(): void {
    this.state.handle(this);
  }
}
