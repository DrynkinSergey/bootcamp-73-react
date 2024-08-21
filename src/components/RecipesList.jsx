import { Link, useLocation } from 'react-router-dom';

export const RecipesList = ({ recipes }) => {
  const location = useLocation();

  return (
    <div>
      <ul className='grid grid-cols-3 gap-x-2 gap-y-8 max-w-screen-lg mx-auto py-10 px-2 '>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`} state={location}>
              <img src={recipe.image} alt={recipe.name} />
              <h3>{recipe.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
