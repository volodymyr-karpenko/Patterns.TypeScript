import { PatternUseCase } from "../PatternUseCase";
import { AbstractProduct } from "./AbstractProduct";
import { ConcreteProductOne } from "./ConcreteProductOne";
import { ConcreteProductTwo } from "./ConcreteProductTwo";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    let product: AbstractProduct = new ConcreteProductOne();
    product.templateMethod();

    product = new ConcreteProductTwo();
    product.templateMethod();
  }
}
