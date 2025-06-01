import { createStore } from "redux";
import { xoReducer } from "./reducer";

export const store = createStore(xoReducer);
