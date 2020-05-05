import { RouteComponentProps } from "react-router";
import { IPatternsState } from "./IPatternsState";
import { patternsSlice } from "./patternsSlice";

export type IPatternsProps = RouteComponentProps<{}> & IPatternsState & typeof patternsSlice.actions;