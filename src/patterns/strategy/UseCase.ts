import { PatternUseCase } from "../PatternUseCase";
import { Context } from "./Context";
import { ConcreteStrategyOne } from "./ConcreteStrategyOne";
import { ConcreteStrategyTwo } from "./ConcreteStrategyTwo";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    let context: Context = new Context(new ConcreteStrategyOne());
    context.contextInterface();

    context = new Context(new ConcreteStrategyTwo());
    context.contextInterface();
  }
}
