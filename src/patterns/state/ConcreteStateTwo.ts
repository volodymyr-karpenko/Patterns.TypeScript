import { AbstractState } from "./AbstractState";
import { Context } from "./Context";
import { ConcreteStateOne } from "./ConcreteStateOne";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteStateTwo extends AbstractState {
  handle(context: Context): void {
    context.state = new ConcreteStateOne();

    PatternUseCase.output +=
      "State of " +
      context.constructor.name +
      ": " +
      context.state.constructor.name +
      "\n\n";
  }
}
