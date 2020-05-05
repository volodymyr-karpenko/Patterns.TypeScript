import { AbstractDecorator } from "./AbstractDecorator";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteDecoratorTwo extends AbstractDecorator {

    private AddedBehavior(): void {
        PatternUseCase.Output += "Added Behavior \r\n\r\n";
    }

    public Operation(): void {
        super.Operation();
        this.AddedBehavior();
    }
}