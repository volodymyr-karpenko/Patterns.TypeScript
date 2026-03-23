import { PatternUseCase } from "../PatternUseCase";
import { Context } from "./Context";
import { ConcreteStateTwo } from "./ConcreteStateTwo";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const context: Context = new Context(new ConcreteStateTwo());
    context.request();
    context.request();
    context.request();
    context.request();
  }
}
