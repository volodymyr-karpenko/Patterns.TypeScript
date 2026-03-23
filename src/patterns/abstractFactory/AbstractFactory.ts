import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";

export abstract class AbstractFactory {
  abstract createProductOne(): AbstractProductOne;

  abstract createProductTwo(): AbstractProductTwo;
}
