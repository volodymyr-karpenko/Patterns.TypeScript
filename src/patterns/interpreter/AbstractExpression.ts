import { Context } from "./Context";

export abstract class AbstractExpression {
  abstract interpret(context: Context): void;
}
