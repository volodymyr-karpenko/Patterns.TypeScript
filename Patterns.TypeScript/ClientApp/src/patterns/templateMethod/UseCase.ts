import { PatternUseCase } from "../PatternUseCase";
import { AbstractProduct } from "./AbstractProduct";
import { ConcreteProductOne } from "./ConcreteProductOne";
import { ConcreteProductTwo } from "./ConcreteProductTwo";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        let product: AbstractProduct = new ConcreteProductOne();
        product.TemplateMethod();

        product = new ConcreteProductTwo();
        product.TemplateMethod();
    }
}