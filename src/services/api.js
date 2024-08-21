import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/';

export const fetchRecipes = async params => {
  const { data } = await axios.get('recipes', {
    params: {
      ...params,
    },
  });
  return data;
};
export const fetchRecipeById = async (id, params) => {
  const { data } = await axios.get(`recipes/${id}`, {
    params: {
      ...params,
    },
  });
  return data;
};
