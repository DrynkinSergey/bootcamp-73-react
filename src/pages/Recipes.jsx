import { useSearchParams } from 'react-router-dom';
import { RecipesList } from '../components/RecipesList';
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from 'react';
import { fetchRecipeByQuery, fetchRecipes, fetchRecipeTags } from '../services/api';

const Recipes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [tags, setTags] = useState([]);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { recipes } = query ? await fetchRecipeByQuery({ q: query }) : await fetchRecipes();
        setRecipes(recipes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);
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
    <div
      className='min-h-screen'
      style={{
        backgroundImage: 'url(https://t3.ftcdn.net/jpg/02/08/52/58/360_F_208525886_ph0EXbxxueCFT5IXPBDgWfFkIUdkfBaL.jpg)',
      }}
    >
      <SearchBar query={query} setQuery={setQuery} tags={tags} />

      <RecipesList recipes={recipes} />
    </div>
  );
};
export default Recipes;
