import { AbstractComponent } from "./AbstractComponent";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteComponent extends AbstractComponent {
  operation(): void {
    PatternUseCase.output += ConcreteComponent.name + ":\n\n";
  }
}
