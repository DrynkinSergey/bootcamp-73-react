export const selectFavorites = state => state.recipes;
export const selectIsExist = (state, item) => {
  return state.recipes.some(recipe => recipe?.id === item?.id);
};
