import { useEffect, useState } from 'react';
import { fetchRecipes } from '../services/api';
import { Link } from 'react-router-dom';

export const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { recipes } = await fetchRecipes();
        setRecipes(recipes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      <ul className='grid grid-cols-3 gap-x-2 gap-y-8 max-w-screen-lg mx-auto py-10 px-2 '>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={recipe.id.toString()}>
              <img src={recipe.image} alt={recipe.name} />
              <h3>{recipe.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
