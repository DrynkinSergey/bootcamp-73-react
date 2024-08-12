import axios from 'axios';

export const fetchArticles = async (query, page = 0) => {
  const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`);
  return data;
};

// export const fetchArticles = async query => {
//   const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
//   const data = await response.json();
//   return data;
// };
