import { PatternUseCase } from "../PatternUseCase";

export class Product {
  parts: string[] = [];

  add(part: string): void {
    this.parts.push(part);
  }

  show(): void {
    this.parts.forEach((part) => {
      PatternUseCase.output +=
        Product.name +
        " Part " +
        (this.parts.indexOf(part) + 1).toString() +
        ": " +
        part +
        "\n\n";
    });
  }
}
