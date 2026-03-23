import { PatternUseCase } from "../PatternUseCase";
import { AbstractComponent } from "./AbstractComponent";
import { ConcreteComponent } from "./ConcreteComponent";
import { AbstractDecorator } from "./AbstractDecorator";
import { ConcreteDecoratorOne } from "./ConcreteDecoratorOne";
import { ConcreteDecoratorTwo } from "./ConcreteDecoratorTwo";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const component: AbstractComponent = new ConcreteComponent();

    const decorator1: AbstractDecorator = new ConcreteDecoratorOne();
    const decorator2: AbstractDecorator = new ConcreteDecoratorTwo();

    decorator1.component = component;

    decorator2.component = decorator1;
    decorator2.operation();
  }
}
