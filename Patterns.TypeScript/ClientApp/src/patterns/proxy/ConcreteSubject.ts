import { AbstractSubject } from "./AbstractSubject";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteSubject extends AbstractSubject {

    public Request(): void {
        PatternUseCase.Output += ConcreteSubject.name + " => Request \r\n\r\n";
    }
}