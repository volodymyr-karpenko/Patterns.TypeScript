export abstract class AbstractComponent {

    public constructor(name: string) {
        this.Name = name;
    }

    protected Name: string;

    abstract Operation(): void

    abstract Add(component: AbstractComponent): void;

    abstract Remove(component: AbstractComponent): void;

    abstract GetChild(index: number): AbstractComponent;
}