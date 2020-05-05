import { Abstraction } from "./Abstraction";
import { AbstractImplementor } from "./AbstractImplementor";
import { PatternUseCase } from "../PatternUseCase";

export class RefinedAbstraction extends Abstraction {

    public constructor(implementor: AbstractImplementor) {
        super(implementor);
    }

    public Operation(): void {

        // Add behavior
        PatternUseCase.Output += "RefinedAbstraction => Add behavior BEFORE operation from Implementor \r\n\r\n";

        super.Operation();

        // Add behavior
        PatternUseCase.Output += "RefinedAbstraction => Add behavior AFTER operation from Implementor \r\n\r\n";
    }
}