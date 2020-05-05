import { AbstractBuilder } from "./AbstractBuilder";

export class Director {

    public constructor(builder: AbstractBuilder) {
        this.Builder = builder;
    }

    public Builder: AbstractBuilder;

    public Constuct(): void {
        this.Builder.BuildPartOne();
        this.Builder.BuildPartTwo();
        this.Builder.BuildPartThree();
    }
}