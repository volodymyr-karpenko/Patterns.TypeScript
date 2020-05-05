import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { patternsSlice } from "../features/patternsDemo/patternsSlice";

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href") as string;
export const history = createBrowserHistory({ basename: baseUrl });

const rootReducer = combineReducers({
    [patternsSlice.name]: patternsSlice.reducer,
    router: connectRouter(history)
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), routerMiddleware(history)]
});