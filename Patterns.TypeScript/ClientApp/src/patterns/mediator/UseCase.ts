import { PatternUseCase } from "../PatternUseCase";
import { ConcreteMediator } from "./ConcreteMediator";
import { ConcreteColleagueOne } from "./ConcreteColleagueOne";
import { ConcreteColleagueTwo } from "./ConcreteColleagueTwo";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const mediator: ConcreteMediator = new ConcreteMediator();
        const colleague1: ConcreteColleagueOne = new ConcreteColleagueOne(mediator);
        const colleague2: ConcreteColleagueTwo = new ConcreteColleagueTwo(mediator);
        mediator.Colleague1 = colleague1;
        mediator.Colleague2 = colleague2;
        colleague2.Send("IMPORTANT MESSAGE");
    }
}