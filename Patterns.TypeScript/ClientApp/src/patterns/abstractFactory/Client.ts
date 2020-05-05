import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";
import { AbstractFactory } from "./AbstractFactory";

export class Client {

    public constructor(factory: AbstractFactory) {
        this.ProductOne = factory.CreateProductOne();
        this.ProductTwo = factory.CreateProductTwo();
    }

    private ProductOne: AbstractProductOne;
    private ProductTwo: AbstractProductTwo;    

    public Run(): void {
        this.ProductTwo.Interact(this.ProductOne);
    }
}