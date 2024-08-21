import { useSearchParams } from 'react-router-dom';
import { RecipesList } from '../components/RecipesList';
import SearchBar from '../components/SearchBar';

const Recipes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const setQuery = query => {
    searchParams.set('query', query);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <RecipesList query={query} />
    </div>
  );
};
export default Recipes;
