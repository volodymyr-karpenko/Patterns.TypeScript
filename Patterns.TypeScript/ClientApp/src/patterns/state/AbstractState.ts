import { Context } from "./Context";

export abstract class AbstractState {

    public abstract Handle(context: Context): void;
}