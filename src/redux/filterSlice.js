import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeSearchFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterSlice = slice.reducer;
export const { changeSearchFilter } = slice.actions;
