import { AbstractFactory } from "./AbstractFactory";
import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";
import { ConcreteFamilyBProductOne } from "./ConcreteFamilyBProductOne";
import { ConcreteFamilyBProductTwo } from "./ConcreteFamilyBProductTwo";

export class ConcreteFactoryFamilyB extends AbstractFactory {
  createProductOne(): AbstractProductOne {
    return new ConcreteFamilyBProductOne();
  }

  createProductTwo(): AbstractProductTwo {
    return new ConcreteFamilyBProductTwo();
  }
}
