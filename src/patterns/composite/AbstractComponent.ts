export abstract class AbstractComponent {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract operation(): void;

  abstract add(component: AbstractComponent): void;

  abstract remove(component: AbstractComponent): void;

  abstract getChild(index: number): AbstractComponent;
}
