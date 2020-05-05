import { PatternUseCase } from "../PatternUseCase";
import { AbstractCreator } from "./AbstractCreator";
import { AbstractProduct } from "./AbstractProduct";
import { ConcreteCreatorOne } from "./ConcreteCreatorOne";
import { ConcreteCreatorTwo } from "./ConcreteCreatorTwo";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();

        let creator: AbstractCreator = new ConcreteCreatorOne();
        let product: AbstractProduct = creator.FactoryMethod();

        PatternUseCase.Output += creator.constructor.name + " => " + product.constructor.name + " \r\n\r\n";

        // Or
        creator = new ConcreteCreatorTwo();
        creator.Operation();
        product = creator.Product;

        PatternUseCase.Output += creator.constructor.name + " => " + product.constructor.name + " \r\n\r\n";
    }
}