import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";
import { PatternUseCase } from "../PatternUseCase";

export class ConcreteProductTwoFamilyA extends AbstractProductTwo {

    public Interact(productOne: AbstractProductOne): void {
        PatternUseCase.Output += ConcreteProductTwoFamilyA.name + " Interact " + productOne.constructor.name + "\r\n\r\n";
    }
}