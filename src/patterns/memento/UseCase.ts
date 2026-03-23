import { PatternUseCase } from "../PatternUseCase";
import { Originator } from "./Originator";
import { CareTaker } from "./CareTaker";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const originator: Originator = new Originator();
    originator.state = "ON";

    const careTaker: CareTaker = new CareTaker();
    careTaker.memento = originator.createMemento();

    originator.state = "OFF";
    originator.setMemento(careTaker.memento);

    PatternUseCase.output += "Current state: " + originator.state;
  }
}
