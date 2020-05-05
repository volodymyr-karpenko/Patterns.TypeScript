import { AbstractExpression } from "./AbstractExpression";
import { Context } from "./Context";
import { PatternUseCase } from "../PatternUseCase";

export class TerminalExpression extends AbstractExpression {

    public Interpret(context: Context): void {
        context.Result = context.Source[context.Position] == context.Vocabulary; 

        PatternUseCase.Output += context.Result ?
            "Symbol " + context.Source[context.Position] + " = Vocabulary " + context.Vocabulary.toString() + "\r\n\r\n" :
            "Stop Interpreting. Reason: Invalid Source. Symbol " +
            context.Source[context.Position] + " != Vocabulary " + context.Vocabulary.toString() + "\r\n\r\n";
    }    
}