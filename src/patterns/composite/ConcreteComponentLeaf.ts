/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractComponent } from "./AbstractComponent";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteComponentLeaf extends AbstractComponent {
  constructor(name: string) {
    super(name);
  }

  operation(): void {
    PatternUseCase.output += this.name + "\n\n";
  }

  add(component: AbstractComponent): void {
    throw new Error("Invalid Operation Exception.");
  }

  remove(component: AbstractComponent): void {
    throw new Error("Invalid Operation Exception.");
  }

  getChild(index: number): AbstractComponent {
    throw new Error("Invalid Operation Exception.");
  }
}
