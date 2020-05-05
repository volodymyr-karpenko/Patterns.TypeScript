import { AbstractState } from "./AbstractState";
import { Context } from "./Context";
import { ConcreteStateTwo } from "./ConcreteStateTwo";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteStateOne extends AbstractState {

    public Handle(context: Context): void {
        context.State = new ConcreteStateTwo();
        PatternUseCase.Output += "State of " + context.constructor.name + ": " + context.State.constructor.name + "\r\n\r\n";
    }
}