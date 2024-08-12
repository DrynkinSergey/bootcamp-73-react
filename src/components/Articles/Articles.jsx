import { useEffect } from 'react';
import List from './List';
import SearchBar from './SearchBar';
import { useState } from 'react';
import { fetchArticles } from '../../services/api';
import { Loader } from 'lucide-react';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchArticles('react');
        setArticles(data.hits);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='bg-gray-200 min-h-screen relative'>
      <SearchBar />
      <List articles={articles} />
      {isError && <h2 className='text-red-500 text-center text-2xl'>Something went wrong!</h2>}
      {isLoading && (
        <span className='absolute right-5 top-5  animate-spin'>
          <Loader />
        </span>
      )}
    </div>
  );
};
export default Articles;
// useEffect(() => {
//   axios.get('https://hn.algolia.com/api/v1/search?query=react').then(res => setArticles(res.data.hits));
// }, []);
