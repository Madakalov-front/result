import { createStore } from "redux";
import { xoReducer } from "./reducer";

export const store = createStore(xoReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
