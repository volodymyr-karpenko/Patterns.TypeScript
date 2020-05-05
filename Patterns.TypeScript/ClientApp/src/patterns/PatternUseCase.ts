export abstract class PatternUseCase {    

    public constructor() {
        PatternUseCase.Output = "";
    }

    public static Output: string;

    public GetOutput(): string {
        return PatternUseCase.Output;
    }
}