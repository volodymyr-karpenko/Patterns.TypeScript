import { PatternUseCase } from "../PatternUseCase";
import { Enumerable } from "./Enumerable";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const enumerable: Enumerable = new Enumerable();

    for (let i = 0; i < 10; i++) {
      enumerable.setItem(i, i.toString());
    }

    for (const item of enumerable) {
      PatternUseCase.output += item + "\n\n";
    }
  }
}
