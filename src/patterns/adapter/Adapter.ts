import { Adaptee } from "./Adaptee";
import { ITarget } from "./ITarget";

export class Adapter extends Adaptee implements ITarget {
  request(): void {
    this.specificRequest();
  }
}
