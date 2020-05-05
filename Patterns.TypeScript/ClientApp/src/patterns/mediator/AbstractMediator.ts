import { AbstractColleague } from "./AbstractColleague";

export abstract class AbstractMediator {

    public abstract Send(msg: string, colleague: AbstractColleague): void;
}