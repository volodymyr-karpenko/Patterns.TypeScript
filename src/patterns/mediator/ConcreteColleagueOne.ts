import { AbstractColleague } from "./AbstractColleague";
import { AbstractMediator } from "./AbstractMediator";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteColleagueOne extends AbstractColleague {
  constructor(mediator: AbstractMediator) {
    super(mediator);
  }

  send(msg: string): void {
    this.mediator.send(msg, this);
  }

  notify(msg: string): void {
    PatternUseCase.output +=
      "Notification from " +
      this.mediator.constructor.name +
      ": " +
      msg +
      "\n\n";
  }
}
