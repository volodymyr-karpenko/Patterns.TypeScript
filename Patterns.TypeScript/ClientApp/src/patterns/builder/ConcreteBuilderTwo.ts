import { AbstractBuilder } from "./AbstractBuilder";
import { Product } from "./Product";

export class ConcreteBuilderTwo extends AbstractBuilder {

    public Product: Product = new Product();

    public BuildPartOne(): void {
        this.Product.Add(ConcreteBuilderTwo.name + " => BuildPartOne");
    }

    public BuildPartTwo(): void {
        this.Product.Add(ConcreteBuilderTwo.name + " => BuildPartTwo");
    }

    public BuildPartThree(): void {
        this.Product.Add(ConcreteBuilderTwo.name + " => BuildPartThree");
    }

    public GetResult(): Product {
        return this.Product;
    }
}