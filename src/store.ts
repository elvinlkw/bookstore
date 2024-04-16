import { configureStore } from "@reduxjs/toolkit";
import books from "./reducers/books";

export const initializeStore = () => {
  return configureStore({
    reducer: {
      books,
    },
  });
};

// Infer the type of initializeStore
export type AppStore = ReturnType<typeof initializeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
