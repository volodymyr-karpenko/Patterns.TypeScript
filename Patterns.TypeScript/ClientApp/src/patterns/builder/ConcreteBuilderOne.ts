import { AbstractBuilder } from "./AbstractBuilder";
import { Product } from "./Product";

export class ConcreteBuilderOne extends AbstractBuilder {

    public Product: Product = new Product();

    public BuildPartOne(): void {
        this.Product.Add(ConcreteBuilderOne.name + " => BuildPartOne");
    }

    public BuildPartTwo(): void {
        this.Product.Add(ConcreteBuilderOne.name + " => BuildPartTwo");
    }

    public BuildPartThree(): void {
        this.Product.Add(ConcreteBuilderOne.name + " => BuildPartThree");
    }

    public GetResult(): Product {
        return this.Product;
    }
}