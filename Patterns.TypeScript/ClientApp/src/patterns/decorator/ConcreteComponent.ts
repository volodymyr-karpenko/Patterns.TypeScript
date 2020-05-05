import { AbstractComponent } from "./AbstractComponent";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteComponent extends AbstractComponent {

    public Operation(): void {
        PatternUseCase.Output += ConcreteComponent.name + " : \r\n\r\n";
    }    
}