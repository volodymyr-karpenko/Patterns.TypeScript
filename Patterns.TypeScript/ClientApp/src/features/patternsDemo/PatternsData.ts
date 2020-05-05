import { IPatternsState } from "./IPatternsState";
import { PatternType } from "./PatternType";

export class PatternsData implements IPatternsState {

    public SelectedPatternName: string = "Select Pattern";

    public SelectedPatternOutput: string = "Pattern Not Selected \r\n\r\n";

    public readonly CreationalPatterns: string[] = [
        PatternType.AbstractFactory, PatternType.Builder, PatternType.FactoryMethod, PatternType.Prototype, PatternType.Singleton];

    public readonly StructuralPatterns: string[] = [
        PatternType.Adapter, PatternType.Bridge, PatternType.Composite, PatternType.Decorator, PatternType.Facade, PatternType.Flyweight, PatternType.Proxy];

    public readonly BehavioralPatterns: string[] = [
        PatternType.ChainOfResponsibility, PatternType.Command, PatternType.Interpreter, PatternType.Iterator, PatternType.Mediator,
        PatternType.Memento, PatternType.Observer, PatternType.State, PatternType.Strategy, PatternType.TemplateMethod, PatternType.Visitor];

    public readonly CreationalPatternsTitle: string = "Creational Patterns";

    public readonly StructuralPatternsTitle: string = "Structural Patterns";

    public readonly BehavioralPatternsTitle: string = "Behavioral Patterns";   

    public GetDefaultState(): IPatternsState {
        return {
            SelectedPatternName: this.SelectedPatternName,
            SelectedPatternOutput: this.SelectedPatternOutput
        };
    }
}