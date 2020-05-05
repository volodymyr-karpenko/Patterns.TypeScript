import { AbstractProductOne } from "./AbstractProductOne";
import { AbstractProductTwo } from "./AbstractProductTwo";

export abstract class AbstractFactory {

    public abstract CreateProductOne(): AbstractProductOne;

    public abstract CreateProductTwo(): AbstractProductTwo;
}