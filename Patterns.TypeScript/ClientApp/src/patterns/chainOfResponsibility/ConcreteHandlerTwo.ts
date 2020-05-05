import { AbstractHandler } from "./AbstractHandler";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteHandlerTwo extends AbstractHandler {

    public HandleRequest(request: number): void {
        if (request == 2) {
            PatternUseCase.Output += ConcreteHandlerTwo.name + " => HandleRequest " + request.toString() + "\r\n\r\n";
        }
        else if (this.Successor) {
            this.Successor.HandleRequest(request);
        }
    }
}