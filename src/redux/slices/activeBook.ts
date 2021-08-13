import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../shared/interfaces/IBook";
import { RootState } from "../store";

const initialState: IBook = {
  id: "",
  volumeInfo: {
    title: "",
    authors: [],
    publishedDate: "",
    publisher: "",
    imageLinks: { smallThumbnail: "", thumbnail: "" },
    language: "",
    previewLink: "",
    description: "",
    pageCount: 0,
  },
};

export const activeBookSlice = createSlice({
  name: "activeBook",
  initialState,
  reducers: {
    setBook: (state, action) => {
      return action.payload;
    },
  },
});

export const { setBook } = activeBookSlice.actions;
export const selectBook = (state: RootState) => state.activeBook;
export default activeBookSlice.reducer;
