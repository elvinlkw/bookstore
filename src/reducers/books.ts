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
    addBook: (state, action) => {
      return [...state, action.payload];
    },
    editBook: (state, action) => {
      return state.map((book) => {
        if (book.id === action.payload.id) {
          return action.payload;
        }

        return book;
      });
    },
  },
});

export const { loadBooks, deleteBook, addBook, editBook } = books.actions;

export default books.reducer;
