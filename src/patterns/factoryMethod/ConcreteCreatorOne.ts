import { AbstractCreator } from "./AbstractCreator";
import { AbstractProduct } from "./AbstractProduct";
import { ConcreteProductOne } from "./ConcreteProductOne";

export class ConcreteCreatorOne extends AbstractCreator {
  factoryMethod(): AbstractProduct {
    return new ConcreteProductOne();
  }
}
