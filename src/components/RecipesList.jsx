import { useEffect, useState } from 'react';
import { fetchRecipeByQuery, fetchRecipes } from '../services/api';
import { Link, useLocation } from 'react-router-dom';

export const RecipesList = ({ query }) => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
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
  return (
    <div>
      <ul className='grid grid-cols-3 gap-x-2 gap-y-8 max-w-screen-lg mx-auto py-10 px-2 '>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={recipe.id.toString()} state={location}>
              <img src={recipe.image} alt={recipe.name} />
              <h3>{recipe.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
