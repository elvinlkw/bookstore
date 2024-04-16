import { createSlice } from "@reduxjs/toolkit";
import { Book } from "@/types";

const initialState: Book[] = [];

const books = createSlice({
  name: "books",
  initialState,
  reducers: {
    loadBooks: (_, action) => {
      return action.payload;
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { loadBooks, deleteBook } = books.actions;

export default books.reducer;
