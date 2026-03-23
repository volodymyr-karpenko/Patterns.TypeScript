import { AbstractProduct } from "./AbstractProduct";

export abstract class AbstractCreator {
  #product?: AbstractProduct;

  get product(): AbstractProduct {
    return this.#product as AbstractProduct;
  }

  abstract factoryMethod(): AbstractProduct;

  operation(): void {
    this.#product = this.factoryMethod();
  }
}
