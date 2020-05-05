import { AbstractCreator } from "./AbstractCreator";
import { AbstractProduct } from "./AbstractProduct";
import { ConcreteProductTwo } from "./ConcreteProductTwo";

export class ConcreteCreatorTwo extends AbstractCreator {

    public FactoryMethod(): AbstractProduct {
        return new ConcreteProductTwo();
    }
}