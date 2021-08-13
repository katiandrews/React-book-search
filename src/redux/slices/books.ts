import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../shared/interfaces/IBook";
import { RootState } from "../store";

const initialState: IBook[] = [];

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBook[]>) => {
      return action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;
export const selectBooks = (state: RootState) => state.books;
export default booksSlice.reducer;
