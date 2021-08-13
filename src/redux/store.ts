import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/books";
import activeBookReducer from "./slices/activeBook";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    activeBook: activeBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
