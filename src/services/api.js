import axios from 'axios';

export const fetchArticles = async params => {
  const { data } = await axios.get(`https://hn.algolia.com/api/v1/search`, {
    params: {
      hitsPerPage: 10,
      query: 'Tailwind',
      ...params,
    },
  });
  return data;
};

export const fetchProducts = async params => {
  const { data } = await axios.get('https://dummyjson.com/products', {
    params: {
      ...params,
    },
  });
  return data;
};
// export const fetchArticles = async query => {
//   const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
//   const data = await response.json();
//   return data;
// };
