import { PatternUseCase } from "../PatternUseCase";
import { Originator } from "./Originator";
import { CareTaker } from "./CareTaker";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const originator: Originator = new Originator();
        originator.State = "ON";
        const careTaker: CareTaker = new CareTaker();
        careTaker.Memento = originator.CreateMemento();
        originator.State = "OFF";
        originator.SetMemento(careTaker.Memento);
        PatternUseCase.Output += "Current state: " + originator.State;
    }
}