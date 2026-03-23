import { AbstractExpression } from "./AbstractExpression";
import { Context } from "./Context";
import { TerminalExpression } from "./TerminalExpression";

export class NonterminalExpression extends AbstractExpression {
  #terminalExpression?: AbstractExpression;
  #nonterminalExpression?: AbstractExpression;

  interpret(context: Context): void {
    if (context.position < context.source.length) {
      this.#terminalExpression = new TerminalExpression();
      this.#terminalExpression.interpret(context);

      context.position++;

      if (context.result) {
        this.#nonterminalExpression = new NonterminalExpression();
        this.#nonterminalExpression.interpret(context);
      }
    }
  }
}
