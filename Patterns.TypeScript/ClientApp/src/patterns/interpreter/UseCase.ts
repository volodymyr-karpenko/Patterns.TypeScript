import { PatternUseCase } from "../PatternUseCase";
import { Context } from "./Context";
import { AbstractExpression } from "./AbstractExpression";
import { NonterminalExpression } from "./NonterminalExpression";

export default class UseCase extends PatternUseCase {

    public constructor() {
        super();
        
        const context: Context = new Context();
        const expression: AbstractExpression = new NonterminalExpression();
        
        context.Vocabulary = "a";
        context.Source = "aba";
        expression.Interpret(context);
    }
}