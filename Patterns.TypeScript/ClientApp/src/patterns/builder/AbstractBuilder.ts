import { Product } from "./Product";

export abstract class AbstractBuilder {

    public abstract BuildPartOne(): void;

    public abstract BuildPartTwo(): void;

    public abstract BuildPartThree(): void;

    public abstract GetResult(): Product;
}