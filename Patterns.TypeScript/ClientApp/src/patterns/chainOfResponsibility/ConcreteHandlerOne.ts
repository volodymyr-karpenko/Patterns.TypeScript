import { AbstractHandler } from "./AbstractHandler";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteHandlerOne extends AbstractHandler {

    public HandleRequest(request: number): void {
        if (request == 1) {
            PatternUseCase.Output += ConcreteHandlerOne.name + " => HandleRequest " + request.toString() + "\r\n\r\n";
        }
        else if (this.Successor) {
            this.Successor.HandleRequest(request);
        }
    }
}