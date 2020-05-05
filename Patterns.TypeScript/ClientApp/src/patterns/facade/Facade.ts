import { SubSystemA } from "./SubSystemA";
import { SubSystemB } from "./SubSystemB";
import { SubSystemC } from "./SubSystemC";
import { SubSystemD } from "./SubSystemD";

export class Facade {

    private subSystemA: SubSystemA = new SubSystemA();
    private subSystemB: SubSystemB = new SubSystemB();
    private subSystemC: SubSystemC = new SubSystemC();
    private subSystemD: SubSystemD = new SubSystemD();

    public OperationAB(): void {
        this.subSystemA.OperationA();
        this.subSystemB.OperationB();
    }

    public OperationCD(): void {
        this.subSystemC.OperationC();
        this.subSystemD.OperationD();
    }
}