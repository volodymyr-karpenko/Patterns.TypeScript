import { AbstractFlyweight } from "./AbstractFlyweight";
import { ConcreteFlyweightShared } from "./ConcreteFlyweightShared";

export class FlyweightFactory {
  #pool: { [key: string]: AbstractFlyweight } = {};

  constructor() {
    this.#pool["1"] = new ConcreteFlyweightShared();
  }

  getFlyweight(key: string): AbstractFlyweight {
    if (!this.#pool[key]) {
      this.#pool[key] = new ConcreteFlyweightShared();
    }

    return this.#pool[key] as AbstractFlyweight;
  }
}
