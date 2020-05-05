import { AbstractDecorator } from "./AbstractDecorator";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteDecoratorOne extends AbstractDecorator {

    private AddedState: string = "Added State";

    public Operation(): void {
        super.Operation();
        PatternUseCase.Output += this.AddedState + "\r\n\r\n";
    }
}