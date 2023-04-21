import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = '4sREW0WX96Co7j4nt5il';

const initialState = {
  allBooks: [],
  isLoading: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const response = await axios.get(`${baseUrl}/apps/${key}/books`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const postBook = createAsyncThunk('book/postBook', async (book) => {
  const response = await axios.post(`${baseUrl}/apps/${key}/books/`, {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: '',
  });

  return response.data;
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (id) => {
  const response = await axios.delete(`${baseUrl}/apps/${key}/books/${id}`);
  return response.data;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      allBooks: [...state.allBooks, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      allBooks: state.allBooks.filter((book) => book.id !== action.payload),
    }),

  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        allBooks: Object.entries(action.payload).map(([id, [book]]) => ({ id, ...book })),
      }))
      .addCase(postBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(postBook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        allBooks: [...state.allBooks, action.payload],
      }))
      .addCase(deleteBook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        allBooks: state.allBooks.filter((book) => book.id !== action.payload),
      }));
  },

});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
