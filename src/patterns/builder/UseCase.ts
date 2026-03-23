import { PatternUseCase } from "../PatternUseCase";
import { AbstractBuilder } from "./AbstractBuilder";
import { ConcreteBuilderOne } from "./ConcreteBuilderOne";
import { Director } from "./Director";
import { Product } from "./Product";
import { ConcreteBuilderTwo } from "./ConcreteBuilderTwo";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    let builder: AbstractBuilder = new ConcreteBuilderOne();
    let director: Director = new Director(builder);
    director.constuct();
    let product: Product = builder.getResult();
    product.show();

    builder = new ConcreteBuilderTwo();
    director = new Director(builder);
    director.constuct();
    product = builder.getResult();
    product.show();
  }
}
