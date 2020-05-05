import { AbstractFlyweight } from "./AbstractFlyweight";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteFlyweightUnshared extends AbstractFlyweight {

    private AllState?: number;

    public Operation(extrinsicState: number): void {
        this.AllState = extrinsicState;
        PatternUseCase.Output += ConcreteFlyweightUnshared.name + ": AllState = " + extrinsicState.toString() + "\r\n\r\n";
    }
}