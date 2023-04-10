import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  categories: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {list:[], status:'Under Construction'},
  reducers: {
    // Place to add reducers
  }
});

export const { actions, reducer } = categoriesSlice;