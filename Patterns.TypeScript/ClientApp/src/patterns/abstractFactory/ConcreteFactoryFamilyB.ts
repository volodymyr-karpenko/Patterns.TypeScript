import { AbstractFactory } from "./AbstractFactory";
import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";
import { ConcreteProductOneFamilyB } from "./ConcreteProductOneFamilyB";
import { ConcreteProductTwoFamilyB } from "./ConcreteProductTwoFamilyB";

export class ConcreteFactoryFamilyB extends AbstractFactory {

    public CreateProductOne(): AbstractProductOne {
        return new ConcreteProductOneFamilyB();
    }

    public CreateProductTwo(): AbstractProductTwo {
        return new ConcreteProductTwoFamilyB();
    }
}