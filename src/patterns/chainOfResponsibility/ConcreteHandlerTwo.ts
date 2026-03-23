import { AbstractHandler } from "./AbstractHandler";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteHandlerTwo extends AbstractHandler {
  handleRequest(request: number): void {
    if (request === 2) {
      PatternUseCase.output +=
        ConcreteHandlerTwo.name +
        " => HandleRequest " +
        request.toString() +
        "\n\n";
    } else if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}
