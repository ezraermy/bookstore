import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { list: [], status: 'Under Construction' },
  reducers: {
    // Place to add reducers
  },
});

export const { reducer } = categoriesSlice;

export default categoriesSlice.reducer;
