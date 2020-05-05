import { PatternUseCase } from "../PatternUseCase";
import { AbstractBuilder } from "./AbstractBuilder";
import { ConcreteBuilderOne } from "./ConcreteBuilderOne";
import { Director } from "./Director";
import { Product } from "./Product";
import { ConcreteBuilderTwo } from "./ConcreteBuilderTwo";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        let builder: AbstractBuilder = new ConcreteBuilderOne();
        let director: Director = new Director(builder);
        director.Constuct();
        let product: Product = builder.GetResult();
        product.Show();

        builder = new ConcreteBuilderTwo();
        director = new Director(builder);
        director.Constuct();
        product = builder.GetResult();
        product.Show();
    }
}