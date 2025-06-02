import { createStore, applyMiddleware, combineReducers } from "redux";
import { todoReducer } from "@/widgets/JSONServer/model/reducer";
import { thunk } from "redux-thunk";

const rootReduce = combineReducers({
  todos: todoReducer,
});

export const store = createStore(rootReduce, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
