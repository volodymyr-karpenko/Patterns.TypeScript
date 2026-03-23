import { AbstractHandler } from "./AbstractHandler";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteHandlerOne extends AbstractHandler {
  handleRequest(request: number): void {
    if (request === 1) {
      PatternUseCase.output +=
        ConcreteHandlerOne.name +
        " => HandleRequest " +
        request.toString() +
        "\n\n";
    } else if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}
