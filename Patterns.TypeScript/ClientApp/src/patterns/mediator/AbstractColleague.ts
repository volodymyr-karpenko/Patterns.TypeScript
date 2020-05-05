import { AbstractMediator } from "./AbstractMediator";

export abstract class AbstractColleague {

    public constructor(mediator: AbstractMediator) {
        this.Mediator = mediator;
    }

    protected Mediator: AbstractMediator;
}