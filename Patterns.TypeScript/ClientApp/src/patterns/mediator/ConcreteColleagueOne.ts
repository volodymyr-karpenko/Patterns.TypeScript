import { AbstractColleague } from "./AbstractColleague";
import { AbstractMediator } from "./AbstractMediator";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteColleagueOne extends AbstractColleague {

    public constructor(mediator: AbstractMediator) {
        super(mediator);
    }

    public Send(msg: string): void {
        this.Mediator.Send(msg, this);
    }

    public Notify(msg: string): void {
        PatternUseCase.Output += "Notification from " + this.Mediator.constructor.name + ": " + msg + "\r\n\r\n";
    }
}