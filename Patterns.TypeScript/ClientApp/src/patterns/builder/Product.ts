import { PatternUseCase } from "../PatternUseCase";

export class Product {

    public Parts: string[] = [];

    public Add(part: string): void {
        this.Parts.push(part);
    }

    public Show(): void {
        this.Parts.forEach((part) => {
            PatternUseCase.Output += Product.name + " Part " + (this.Parts.indexOf(part) + 1).toString() + ": " + part + "\r\n\r\n";
        });        
    }
}