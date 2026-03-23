import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteFamilyAProductTwo extends AbstractProductTwo {
  interact(productOne: AbstractProductOne): void {
    PatternUseCase.output +=
      ConcreteFamilyAProductTwo.name +
      " interact " +
      productOne.constructor.name +
      "\n\n";
  }
}
