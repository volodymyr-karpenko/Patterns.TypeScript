import { AbstractComponent } from "./AbstractComponent";

export abstract class AbstractDecorator extends AbstractComponent {

    protected _Component?: AbstractComponent;    

    public set Component(component: AbstractComponent) {
        this._Component = component;
    }

    public Operation(): void {
        if (this._Component) {
            this._Component.Operation();
        }
    }
}