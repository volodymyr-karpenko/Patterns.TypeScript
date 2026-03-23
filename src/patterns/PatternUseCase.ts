export abstract class PatternUseCase {
  static output: string;

  constructor() {
    PatternUseCase.output = "";
  }

  getOutput(): string {
    return PatternUseCase.output;
  }
}
