import { AbstractComponent } from "./AbstractComponent";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteComponentComposite extends AbstractComponent {
    
    public constructor(name: string) {
        super(name);
    }

    private Nodes: AbstractComponent[] = [];

    public Operation(): void {
        PatternUseCase.Output += this.Name + "\r\n\r\n";

        this.Nodes.forEach((node) => {
            node.Operation();
        });
    }

    public Add(component: AbstractComponent): void {
        this.Nodes.push(component);
    }

    public Remove(component: AbstractComponent): void {
        if (this.Nodes.indexOf(component)) {
            this.Nodes.splice(this.Nodes.indexOf(component), 1);
        }
    }

    public GetChild(index: number): AbstractComponent {
        return this.Nodes[index] as AbstractComponent;
    }
}