import { AbstractComponent } from "./AbstractComponent";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteComponentLeaf extends AbstractComponent {   

    public constructor(name: string) {
        super(name);
    }

    public Operation(): void {
        PatternUseCase.Output += this.Name + "\r\n\r\n";
    }

    public Add(component: AbstractComponent): void {
        throw new Error("Invalid Operation Exception.");
    }

    public Remove(component: AbstractComponent): void {
        throw new Error("Invalid Operation Exception.");
    }

    public GetChild(index: number): AbstractComponent {
        throw new Error("Invalid Operation Exception.");
    }
}