import { AbstractState } from "./AbstractState";
import { Context } from "./Context";
import { ConcreteStateOne } from "./ConcreteStateOne";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteStateTwo extends AbstractState {

    public Handle(context: Context): void {
        context.State = new ConcreteStateOne();
        PatternUseCase.Output += "State of " + context.constructor.name + ": " + context.State.constructor.name + "\r\n\r\n";
    }
}