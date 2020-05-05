import { AbstractExpression } from "./AbstractExpression";
import { Context } from "./Context";
import { TerminalExpression } from "./TerminalExpression";

export class NonterminalExpression extends AbstractExpression {

    private TerminalExpression?: AbstractExpression;
    private NonterminalExpression?: AbstractExpression;

    public Interpret(context: Context): void {
        if (context.Position < context.Source.length) {
            this.TerminalExpression = new TerminalExpression();
            this.TerminalExpression.Interpret(context);
            context.Position++;            

            if (context.Result) {
                this.NonterminalExpression = new NonterminalExpression();
                this.NonterminalExpression.Interpret(context);
            }            
        }
    }    
}