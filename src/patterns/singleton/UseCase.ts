import { PatternUseCase } from "../PatternUseCase";
import { Singleton } from "./Singleton";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const instance1: Singleton = new Singleton().instance;
    const instance2: Singleton = new Singleton().instance;

    PatternUseCase.output +=
      "Same instance check, Object.is(instance1, instance2): " +
      Object.is(instance1, instance2);
  }
}
