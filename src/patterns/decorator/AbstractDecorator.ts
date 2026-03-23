import { AbstractComponent } from "./AbstractComponent";

export abstract class AbstractDecorator extends AbstractComponent {
  protected _component?: AbstractComponent;

  set component(component: AbstractComponent) {
    this._component = component;
  }

  operation(): void {
    if (this._component) {
      this._component.operation();
    }
  }
}
