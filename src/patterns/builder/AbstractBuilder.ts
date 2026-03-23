import { Product } from "./Product";

export abstract class AbstractBuilder {
  abstract buildPartOne(): void;

  abstract buildPartTwo(): void;

  abstract buildPartThree(): void;

  abstract getResult(): Product;
}
