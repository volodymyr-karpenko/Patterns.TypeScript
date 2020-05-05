import { Adaptee } from "./Adaptee";
import { ITarget } from "./ITarget";

export class Adapter extends Adaptee implements ITarget {

    public Request(): void {
        this.SpecificRequest();
    }
}