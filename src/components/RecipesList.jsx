import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectFavorites } from '../redux/selectors';
import { FaStar, FaRegStar } from 'react-icons/fa';

export const RecipesList = ({ recipes }) => {
  const location = useLocation();
  const favoritesRecipes = useSelector(selectFavorites);
  // const isExist = useSelector(state => selectIsExist(state, recipe));
  // If we want use that inside selectors

  return (
    <div>
      <ul className='grid grid-cols-3 gap-x-2 gap-y-8 max-w-screen-lg mx-auto py-10 px-2 '>
        {recipes.map(recipe => {
          const isExist = favoritesRecipes.some(item => item?.id === recipe?.id);

          return (
            <li className='backdrop-blur p-4 shadow-xl' key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`} state={location}>
                <div className='relative'>
                  <img src={recipe.image} alt={recipe.name} />
                  {isExist && <FaStar color='gold' className='absolute right-2 top-2' />}
                </div>
                <h3>{recipe.name}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
