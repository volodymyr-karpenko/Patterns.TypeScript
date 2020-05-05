import { Context } from "./Context";

export abstract class AbstractExpression {

    public abstract Interpret(context: Context): void;
}