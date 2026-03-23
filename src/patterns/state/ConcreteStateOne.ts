import { AbstractState } from "./AbstractState";
import { Context } from "./Context";
import { ConcreteStateTwo } from "./ConcreteStateTwo";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteStateOne extends AbstractState {
  handle(context: Context): void {
    context.state = new ConcreteStateTwo();

    PatternUseCase.output +=
      "State of " +
      context.constructor.name +
      ": " +
      context.state.constructor.name +
      "\n\n";
  }
}
