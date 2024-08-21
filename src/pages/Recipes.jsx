import { useSearchParams } from 'react-router-dom';
import { RecipesList } from '../components/RecipesList';
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import { fetchRecipeTags } from '../services/api';
import { Tags } from '../components/Tags';

const Recipes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchRecipeTags().then(data => setTags(data));
  }, []);
  const setQuery = query => {
    if (!query) {
      searchParams.delete('query');
      return setSearchParams(searchParams);
    }
    searchParams.set('query', query);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <Tags tags={tags} query={query} setQuery={setQuery} />
      <RecipesList query={query} />
    </div>
  );
};
export default Recipes;
