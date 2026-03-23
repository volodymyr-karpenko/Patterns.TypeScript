import { AbstractBuilder } from "./AbstractBuilder";
import { Product } from "./Product";

export class ConcreteBuilderTwo extends AbstractBuilder {
  product: Product = new Product();

  buildPartOne(): void {
    this.product.add(ConcreteBuilderTwo.name + " => BuildPartOne");
  }

  buildPartTwo(): void {
    this.product.add(ConcreteBuilderTwo.name + " => BuildPartTwo");
  }

  buildPartThree(): void {
    this.product.add(ConcreteBuilderTwo.name + " => BuildPartThree");
  }

  getResult(): Product {
    return this.product;
  }
}
