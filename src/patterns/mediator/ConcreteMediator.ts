import { AbstractMediator } from "./AbstractMediator";
import { AbstractColleague } from "./AbstractColleague";
import { ConcreteColleagueOne } from "./ConcreteColleagueOne";
import { ConcreteColleagueTwo } from "./ConcreteColleagueTwo";

export class ConcreteMediator extends AbstractMediator {
  colleague1?: ConcreteColleagueOne;

  colleague2?: ConcreteColleagueTwo;

  send(msg: string, colleague: AbstractColleague): void {
    if (!this.colleague1 || !this.colleague2) {
      return;
    }

    if (colleague == this.colleague1) {
      this.colleague2.notify(msg);
    } else {
      this.colleague1.notify(msg);
    }
  }
}
