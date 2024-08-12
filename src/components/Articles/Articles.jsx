import { useEffect } from 'react';
import { List } from './List';
import SearchBar from './SearchBar';
import { useState } from 'react';
import { fetchArticles } from '../../services/api';
import { Loader } from 'lucide-react';
import toast from 'react-hot-toast';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  const handleChangeQuery = newQuery => {
    setArticles([]);
    setPage(0);
    setQuery(newQuery);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        setIsError(false);
        const data = await fetchArticles({ query, page });
        setArticles(prev => [...prev, ...data.hits]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    toast.promise(fetchData(), {
      loading: 'Loading',
      success: 'Got the data',
      error: 'Error when fetching',
    });
  }, [page, query]);

  return (
    <div className='bg-gray-200 min-h-screen relative pb-10'>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <List articles={articles} />
      <button onClick={() => setPage(prev => prev + 1)} className='px-4 py-2 bg-teal-500 text-white font-bold mx-auto block'>
        {isLoading ? (
          <span className='animate-spin'>
            <Loader />
          </span>
        ) : (
          'Load more'
        )}
      </button>
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
