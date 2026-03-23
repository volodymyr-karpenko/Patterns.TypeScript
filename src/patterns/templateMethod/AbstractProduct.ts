export abstract class AbstractProduct {
  abstract createPartOne(): void;

  abstract createPartTwo(): void;

  templateMethod(): void {
    this.createPartOne();
    this.createPartTwo();
  }
}
