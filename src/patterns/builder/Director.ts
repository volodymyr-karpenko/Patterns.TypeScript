import { AbstractBuilder } from "./AbstractBuilder";

export class Director {
  builder: AbstractBuilder;

  constructor(builder: AbstractBuilder) {
    this.builder = builder;
  }

  constuct(): void {
    this.builder.buildPartOne();
    this.builder.buildPartTwo();
    this.builder.buildPartThree();
  }
}
