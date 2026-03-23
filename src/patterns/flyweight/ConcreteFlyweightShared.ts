import { AbstractFlyweight } from "./AbstractFlyweight";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteFlyweightShared extends AbstractFlyweight {
  #intrinsicState?: number;

  operation(extrinsicState: number): void {
    this.#intrinsicState = extrinsicState;

    PatternUseCase.output +=
      ConcreteFlyweightShared.name +
      ": IntrinsicState = " +
      this.#intrinsicState.toString() +
      "\n\n";
  }
}
