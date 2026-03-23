import { AbstractFactory } from "./AbstractFactory";
import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";
import { ConcreteFamilyAProductOne } from "./ConcreteFamilyAProductOne";
import { ConcreteFamilyAProductTwo } from "./ConcreteFamilyAProductTwo";

export class ConcreteFactoryFamilyA extends AbstractFactory {
  createProductOne(): AbstractProductOne {
    return new ConcreteFamilyAProductOne();
  }

  createProductTwo(): AbstractProductTwo {
    return new ConcreteFamilyAProductTwo();
  }
}
