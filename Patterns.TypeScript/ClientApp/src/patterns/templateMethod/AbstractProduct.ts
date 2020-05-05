export abstract class AbstractProduct {

    public abstract CreatePartOne(): void;

    public abstract CreatePartTwo(): void;

    public TemplateMethod(): void {
        this.CreatePartOne();
        this.CreatePartTwo();
    }
}