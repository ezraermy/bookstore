import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { list: [], status: 'Under Construction' },
  reducers: {
    // Place to add reducers
  },
});

export const { actions, reducer } = categoriesSlice;
