import { AbstractFlyweight } from "./AbstractFlyweight";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteFlyweightShared extends AbstractFlyweight {

    private IntrinsicState?: number;

    public Operation(extrinsicState: number): void {
        this.IntrinsicState = extrinsicState;
        PatternUseCase.Output += ConcreteFlyweightShared.name + ": IntrinsicState = " + extrinsicState.toString() + "\r\n\r\n";
    }
}