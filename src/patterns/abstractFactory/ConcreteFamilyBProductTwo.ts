import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteFamilyBProductTwo extends AbstractProductTwo {
  interact(productOne: AbstractProductOne): void {
    PatternUseCase.output +=
      ConcreteFamilyBProductTwo.name +
      " interact " +
      productOne.constructor.name +
      "\n\n";
  }
}
