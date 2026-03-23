import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";
import { AbstractFactory } from "./AbstractFactory";

export class Client {
  #productOne: AbstractProductOne;
  #productTwo: AbstractProductTwo;

  constructor(factory: AbstractFactory) {
    this.#productOne = factory.createProductOne();
    this.#productTwo = factory.createProductTwo();
  }

  run(): void {
    this.#productTwo.interact(this.#productOne);
  }
}
