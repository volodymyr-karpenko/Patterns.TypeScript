import { PatternUseCase } from "../PatternUseCase";

export class Adaptee {

    public SpecificRequest(): void {
        PatternUseCase.Output += Adaptee.name + " => SpecificRequest \r\n\r\n";
    }
}