import { PatternUseCase } from "../PatternUseCase";
import { Context } from "./Context";
import { ConcreteStateTwo } from "./ConcreteStateTwo";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const context: Context = new Context(new ConcreteStateTwo());
        context.Request();
        context.Request();
        context.Request();
        context.Request();
    }
}