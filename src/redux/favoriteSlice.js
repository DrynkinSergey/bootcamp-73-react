import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
};

const slice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.recipes.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.recipes = state.recipes.filter(item => item.id !== action.payload);
    },
  },
});

export const favoriteSlice = slice.reducer;
export const { addToFavorite, removeFromFavorite } = slice.actions;
