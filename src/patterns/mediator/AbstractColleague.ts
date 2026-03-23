import { AbstractMediator } from "./AbstractMediator";

export abstract class AbstractColleague {
  protected mediator: AbstractMediator;

  constructor(mediator: AbstractMediator) {
    this.mediator = mediator;
  }
}
