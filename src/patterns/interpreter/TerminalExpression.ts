import { AbstractExpression } from "./AbstractExpression";
import { Context } from "./Context";
import { PatternUseCase } from "../PatternUseCase";

export class TerminalExpression extends AbstractExpression {
  interpret(context: Context): void {
    context.result = context.source[context.position] == context.vocabulary;

    PatternUseCase.output += context.result
      ? "Symbol " +
        context.source[context.position] +
        " = Vocabulary " +
        context.vocabulary.toString() +
        "\n\n"
      : "Stop Interpreting. Reason: Invalid Source. Symbol " +
        context.source[context.position] +
        " != Vocabulary " +
        context.vocabulary.toString() +
        "\n\n";
  }
}
