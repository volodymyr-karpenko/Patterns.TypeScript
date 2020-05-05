import { AbstractMediator } from "./AbstractMediator";
import { AbstractColleague } from "./AbstractColleague";
import { ConcreteColleagueOne } from "./ConcreteColleagueOne";
import { ConcreteColleagueTwo } from "./ConcreteColleagueTwo";

export class ConcreteMediator extends AbstractMediator {

    public Colleague1?: ConcreteColleagueOne;

    public Colleague2?: ConcreteColleagueTwo;

    public Send(msg: string, colleague: AbstractColleague): void {

        if (!this.Colleague1 || !this.Colleague2) {
            return;
        }        

        if (colleague == this.Colleague1) {
            this.Colleague2.Notify(msg);
        }
        else {
            this.Colleague1.Notify(msg);
        }
    }
}