import { AbstractCreator } from "./AbstractCreator";
import { AbstractProduct } from "./AbstractProduct";
import { ConcreteProductTwo } from "./ConcreteProductTwo";

export class ConcreteCreatorTwo extends AbstractCreator {
  factoryMethod(): AbstractProduct {
    return new ConcreteProductTwo();
  }
}
