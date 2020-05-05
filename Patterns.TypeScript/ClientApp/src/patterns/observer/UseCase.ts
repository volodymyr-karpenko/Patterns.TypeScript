import { PatternUseCase } from "../PatternUseCase";
import { ConcreteSubjectOne } from "./ConcreteSubjectOne";
import { ConcreteObserverOne } from "./ConcreteObserverOne";
import { ConcreteObserverTwo } from "./ConcreteObserverTwo";
import { ConcreteSubjectTwo } from "./ConcreteSubjectTwo";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const subjectOne: ConcreteSubjectOne = new ConcreteSubjectOne();
        subjectOne.Attach(new ConcreteObserverOne(subjectOne));
        subjectOne.Attach(new ConcreteObserverTwo(subjectOne));
        subjectOne.State = "SOME STATE...";
        subjectOne.Notify();

        const subjectTwo: ConcreteSubjectTwo = new ConcreteSubjectTwo();
        subjectTwo.Attach(new ConcreteObserverOne(subjectTwo));
        subjectTwo.Attach(new ConcreteObserverTwo(subjectTwo));
        subjectTwo.State = "SOME OTHER STATE...";
        subjectTwo.Notify();
    }
}