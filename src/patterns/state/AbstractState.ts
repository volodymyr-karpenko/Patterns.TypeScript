import { Context } from "./Context";

export abstract class AbstractState {
  abstract handle(context: Context): void;
}
