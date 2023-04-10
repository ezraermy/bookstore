import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [
        ...state.books,
        {
          id: Math.floor(Math.random * 100),
          title: action.payload.title,
          author: action.payload.author,
        },
      ],

    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload.id),
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.actions;
