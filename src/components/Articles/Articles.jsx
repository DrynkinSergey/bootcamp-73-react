import { useEffect } from 'react';
import List from './List';
import SearchBar from './SearchBar';
import axios from 'axios';
import { useState } from 'react';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://hn.algolia.com/api/v1/search?query=react').then(res => setArticles(res.data.hits));
  }, []);
  return (
    <div className='bg-gray-200 min-h-screen'>
      <SearchBar />
      <List articles={articles} />
    </div>
  );
};
export default Articles;
