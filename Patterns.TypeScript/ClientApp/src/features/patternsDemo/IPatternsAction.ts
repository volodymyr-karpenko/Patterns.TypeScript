import { Action } from "redux";
import { IPatternsState } from "./IPatternsState";

export interface IPatternsAction extends Action {
    type: string;
    payload: IPatternsState;
}