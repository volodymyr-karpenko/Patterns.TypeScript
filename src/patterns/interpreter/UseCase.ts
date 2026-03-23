import { PatternUseCase } from "../PatternUseCase";
import { Context } from "./Context";
import { AbstractExpression } from "./AbstractExpression";
import { NonterminalExpression } from "./NonterminalExpression";

export default class UseCase extends PatternUseCase {
  constructor() {
    super();

    const context: Context = new Context();

    const expression: AbstractExpression = new NonterminalExpression();

    context.vocabulary = "a";
    context.source = "aba";

    expression.interpret(context);
  }
}
