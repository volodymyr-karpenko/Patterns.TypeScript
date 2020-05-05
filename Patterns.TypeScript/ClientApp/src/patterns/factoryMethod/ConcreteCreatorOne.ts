import { AbstractCreator } from "./AbstractCreator";
import { AbstractProduct } from "./AbstractProduct";
import { ConcreteProductOne } from "./ConcreteProductOne";

export class ConcreteCreatorOne extends AbstractCreator {    

    public FactoryMethod(): AbstractProduct {
        return new ConcreteProductOne();
    }
}