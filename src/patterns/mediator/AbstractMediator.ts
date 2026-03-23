import { AbstractColleague } from "./AbstractColleague";

export abstract class AbstractMediator {
  abstract send(msg: string, colleague: AbstractColleague): void;
}
