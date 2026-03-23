import { SubSystemA } from "./SubSystemA";
import { SubSystemB } from "./SubSystemB";
import { SubSystemC } from "./SubSystemC";
import { SubSystemD } from "./SubSystemD";

export class Facade {
  #subSystemA: SubSystemA = new SubSystemA();
  #subSystemB: SubSystemB = new SubSystemB();
  #subSystemC: SubSystemC = new SubSystemC();
  #subSystemD: SubSystemD = new SubSystemD();

  operationAB(): void {
    this.#subSystemA.operationA();
    this.#subSystemB.operationB();
  }

  operationCD(): void {
    this.#subSystemC.operationC();
    this.#subSystemD.operationD();
  }
}
