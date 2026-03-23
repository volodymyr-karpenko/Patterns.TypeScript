import { PatternUseCase } from "../PatternUseCase";
import { AbstractHandler } from "./AbstractHandler";
import { ConcreteHandlerOne } from "./ConcreteHandlerOne";
import { ConcreteHandlerTwo } from "./ConcreteHandlerTwo";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const handler: AbstractHandler = new ConcreteHandlerOne();
    handler.successor = new ConcreteHandlerTwo();
    handler.handleRequest(2);
  }
}
