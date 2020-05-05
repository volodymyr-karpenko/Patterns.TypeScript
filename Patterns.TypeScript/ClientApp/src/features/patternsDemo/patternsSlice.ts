import { createSlice } from "@reduxjs/toolkit";
import { PatternsData } from "./PatternsData";
import { IPatternsState } from "./IPatternsState";
import { IPatternsAction } from "./IPatternsAction";

const initialState = new PatternsData().GetDefaultState();

export const patternsSlice = createSlice({
    name: "patterns",
    initialState: initialState,
    reducers: {
        presentOutput: (state: IPatternsState = initialState, incomingAction: IPatternsAction): void => {
            state.SelectedPatternName = incomingAction.payload.SelectedPatternName;
            state.SelectedPatternOutput = incomingAction.payload.SelectedPatternOutput;
        }
    }
});