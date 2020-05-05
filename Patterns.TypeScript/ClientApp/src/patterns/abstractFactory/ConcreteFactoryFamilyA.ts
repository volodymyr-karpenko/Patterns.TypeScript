import { AbstractFactory } from "./AbstractFactory";
import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";
import { ConcreteProductOneFamilyA } from "./ConcreteProductOneFamilyA";
import { ConcreteProductTwoFamilyA } from "./ConcreteProductTwoFamilyA";

export class ConcreteFactoryFamilyA extends AbstractFactory {
    
    public CreateProductOne(): AbstractProductOne {
        return new ConcreteProductOneFamilyA();
    }

    public CreateProductTwo(): AbstractProductTwo {
        return new ConcreteProductTwoFamilyA();
    }
}