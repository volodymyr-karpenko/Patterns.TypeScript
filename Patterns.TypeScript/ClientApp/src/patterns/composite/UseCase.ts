import { PatternUseCase } from "../PatternUseCase";
import { AbstractComponent } from "./AbstractComponent";
import { ConcreteComponentComposite } from "./ConcreteComponentComposite";
import { ConcreteComponentLeaf } from "./ConcreteComponentLeaf";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const root: AbstractComponent = new ConcreteComponentComposite("Root");
        const branch1: AbstractComponent = new ConcreteComponentComposite("Branch 1");
        const branch2: AbstractComponent = new ConcreteComponentComposite("Branch 2");
        const leaf1: AbstractComponent = new ConcreteComponentLeaf("Leaf 1");
        const leaf2: AbstractComponent = new ConcreteComponentLeaf("Leaf 2");

        root.Add(branch1);
        root.Add(branch2);
        branch1.Add(leaf1);
        branch2.Add(leaf2);

        root.Operation();
    }
}