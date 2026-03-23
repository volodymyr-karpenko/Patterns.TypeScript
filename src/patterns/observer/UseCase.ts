import { PatternUseCase } from "../PatternUseCase";
import { ConcreteSubjectOne } from "./ConcreteSubjectOne";
import { ConcreteObserverOne } from "./ConcreteObserverOne";
import { ConcreteObserverTwo } from "./ConcreteObserverTwo";
import { ConcreteSubjectTwo } from "./ConcreteSubjectTwo";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const subjectOne: ConcreteSubjectOne = new ConcreteSubjectOne();
    subjectOne.attach(new ConcreteObserverOne(subjectOne));
    subjectOne.attach(new ConcreteObserverTwo(subjectOne));
    subjectOne.state = "SOME STATE...";
    subjectOne.notify();

    const subjectTwo: ConcreteSubjectTwo = new ConcreteSubjectTwo();
    subjectTwo.attach(new ConcreteObserverOne(subjectTwo));
    subjectTwo.attach(new ConcreteObserverTwo(subjectTwo));
    subjectTwo.state = "SOME OTHER STATE...";
    subjectTwo.notify();
  }
}
