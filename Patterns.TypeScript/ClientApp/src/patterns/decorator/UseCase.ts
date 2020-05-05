import { PatternUseCase } from "../PatternUseCase";
import { AbstractComponent } from "./AbstractComponent";
import { ConcreteComponent } from "./ConcreteComponent";
import { AbstractDecorator } from "./AbstractDecorator";
import { ConcreteDecoratorOne } from "./ConcreteDecoratorOne";
import { ConcreteDecoratorTwo } from "./ConcreteDecoratorTwo";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        const component: AbstractComponent = new ConcreteComponent();
        const decorator1: AbstractDecorator = new ConcreteDecoratorOne();
        const decorator2: AbstractDecorator = new ConcreteDecoratorTwo();

        decorator1.Component = component;
        decorator2.Component = decorator1;
        decorator2.Operation();
    }
}