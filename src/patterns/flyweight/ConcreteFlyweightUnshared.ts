import { AbstractFlyweight } from "./AbstractFlyweight";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteFlyweightUnshared extends AbstractFlyweight {
  #allState?: number;

  operation(extrinsicState: number): void {
    this.#allState = extrinsicState;

    PatternUseCase.output +=
      ConcreteFlyweightUnshared.name +
      ": AllState = " +
      this.#allState.toString() +
      "\n\n";
  }
}
