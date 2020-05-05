import { PatternUseCase } from "../PatternUseCase";
import { AbstractHandler } from "./AbstractHandler";
import { ConcreteHandlerOne } from "./ConcreteHandlerOne";
import { ConcreteHandlerTwo } from "./ConcreteHandlerTwo";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const handler: AbstractHandler = new ConcreteHandlerOne();
        handler.Successor = new ConcreteHandlerTwo();
        handler.HandleRequest(2);
    }
}