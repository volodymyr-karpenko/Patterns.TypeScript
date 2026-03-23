import { PatternUseCase } from "../PatternUseCase";
import { Client } from "./Client";
import { ConcreteFactoryFamilyA } from "./ConcreteFactoryFamilyA";
import { ConcreteFactoryFamilyB } from "./ConcreteFactoryFamilyB";
import { AbstractFactory } from "./AbstractFactory";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    let factory: AbstractFactory = new ConcreteFactoryFamilyA();
    let client: Client = new Client(factory);
    client.run();

    factory = new ConcreteFactoryFamilyB();
    client = new Client(factory);
    client.run();
  }
}
