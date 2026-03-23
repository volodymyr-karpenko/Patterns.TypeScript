import { PatternUseCase } from "../PatternUseCase";
import { ConcreteMediator } from "./ConcreteMediator";
import { ConcreteColleagueOne } from "./ConcreteColleagueOne";
import { ConcreteColleagueTwo } from "./ConcreteColleagueTwo";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const mediator: ConcreteMediator = new ConcreteMediator();

    const colleague1: ConcreteColleagueOne = new ConcreteColleagueOne(mediator);
    const colleague2: ConcreteColleagueTwo = new ConcreteColleagueTwo(mediator);

    mediator.colleague1 = colleague1;
    mediator.colleague2 = colleague2;

    colleague2.send("IMPORTANT MESSAGE");
  }
}
