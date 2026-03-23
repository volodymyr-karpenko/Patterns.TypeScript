import { AbstractComponent } from "./AbstractComponent";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteComponentComposite extends AbstractComponent {
  #nodes: AbstractComponent[] = [];

  constructor(name: string) {
    super(name);
  }

  operation(): void {
    PatternUseCase.output += this.name + "\n\n";

    this.#nodes.forEach((node) => {
      node.operation();
    });
  }

  add(component: AbstractComponent): void {
    this.#nodes.push(component);
  }

  remove(component: AbstractComponent): void {
    if (this.#nodes.indexOf(component)) {
      this.#nodes.splice(this.#nodes.indexOf(component), 1);
    }
  }

  getChild(index: number): AbstractComponent {
    return this.#nodes[index] as AbstractComponent;
  }
}
