import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      itemId: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      itemId: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      itemId: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [
        ...state.books,
        {
          itemId: Math.floor(Math.random() * 100),
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ],

    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.itemId !== action.payload.itemId),
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
