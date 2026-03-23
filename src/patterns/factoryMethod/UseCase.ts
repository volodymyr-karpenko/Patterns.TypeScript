import { PatternUseCase } from "../PatternUseCase";
import { AbstractCreator } from "./AbstractCreator";
import { AbstractProduct } from "./AbstractProduct";
import { ConcreteCreatorOne } from "./ConcreteCreatorOne";
import { ConcreteCreatorTwo } from "./ConcreteCreatorTwo";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    let creator: AbstractCreator = new ConcreteCreatorOne();
    let product: AbstractProduct = creator.factoryMethod();

    PatternUseCase.output +=
      creator.constructor.name + " => " + product.constructor.name + "\n\n";

    // Or
    creator = new ConcreteCreatorTwo();
    creator.operation();
    product = creator.product;

    PatternUseCase.output +=
      creator.constructor.name + " => " + product.constructor.name + "\n\n";
  }
}
