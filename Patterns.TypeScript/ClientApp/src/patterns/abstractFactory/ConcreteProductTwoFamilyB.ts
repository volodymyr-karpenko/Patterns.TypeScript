import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteProductTwoFamilyB extends AbstractProductTwo {

    public Interact(productOne: AbstractProductOne): void {
        PatternUseCase.Output += ConcreteProductTwoFamilyB.name + " Interact " + productOne.constructor.name + "\r\n\r\n";
    }
}