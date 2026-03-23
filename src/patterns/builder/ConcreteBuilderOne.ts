import { AbstractBuilder } from "./AbstractBuilder";
import { Product } from "./Product";

export class ConcreteBuilderOne extends AbstractBuilder {
  product: Product = new Product();

  buildPartOne(): void {
    this.product.add(ConcreteBuilderOne.name + " => BuildPartOne");
  }

  buildPartTwo(): void {
    this.product.add(ConcreteBuilderOne.name + " => BuildPartTwo");
  }

  buildPartThree(): void {
    this.product.add(ConcreteBuilderOne.name + " => BuildPartThree");
  }

  getResult(): Product {
    return this.product;
  }
}
