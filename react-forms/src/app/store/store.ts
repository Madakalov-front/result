import { configureStore } from "@reduxjs/toolkit";

// const saveState = (state: RootState) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("", serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

export const store = configureStore({
  reducer: {},
});

store.subscribe(() => {
  // saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
