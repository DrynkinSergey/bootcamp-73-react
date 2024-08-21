import { useEffect, useRef, useState } from 'react';
import { fetchRecipeById } from '../services/api';
import { Link, useLocation, useParams } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../redux/favoriteSlice';
import { selectFavorites } from '../redux/selectors';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/recipes');
  const dispatch = useDispatch();
  const favoritesRecipes = useSelector(selectFavorites);

  const isExist = favoritesRecipes.some(item => item?.id === recipe?.id);

  useEffect(() => {
    fetchRecipeById(recipeId).then(data => setRecipe(data));
  }, [recipeId]);

  if (!recipe) {
    return <p>Please wait... Your recipe is downloading...</p>;
  }
  return (
    <div className='grid grid-cols-2 p-5 gap-2'>
      <img className='rounded-xl h-[80vh] w-full object-cover ' src={recipe.image} />
      <section>
        <Link to={goBackRef.current} className='text-[16px] flex items-center gap-1'>
          {' '}
          <MoveLeft /> Back
        </Link>
        <h2 className='font-bold flex gap-2 items-center'>
          {recipe.name}
          {isExist ? (
            <FaStar
              color='gold'
              className='cursor-pointer hover:scale-110 transition-all duration-300'
              onClick={() => dispatch(removeFromFavorite(recipe.id))}
            />
          ) : (
            <FaRegStar className='cursor-pointer hover:scale-110 transition-all duration-300' onClick={() => dispatch(addToFavorite(recipe))} />
          )}
        </h2>
        <ul className='flex gap-2 text-[13px] text-gray-500 my-2'>
          {recipe.tags.map((tag, idx) => (
            <li className='border-2 border-black/50 rounded-lg p-1' key={idx}>
              {tag}
            </li>
          ))}
        </ul>
        <p>Cuisine: {recipe.cuisine}</p>
        <p>Time to prepare: {recipe.prepTimeMinutes} minutes</p>
        <p>Difficulty: {recipe.difficulty}</p>
        <p>Servings: {recipe.servings}</p>
        <h3 className='text-center font-bold my-2 underline'>INGREDIENTS</h3>
        <ul className='flex flex-col gap-2 italic list-disc pl-4 mb-2 text-[18px]'>
          {recipe.ingredients.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <h3 className='text-center font-bold my-2 underline'>INSTRUCTION</h3>
        <ol className='flex flex-col gap-2 italic list-decimal pl-4 mb-2 text-[18px]'>
          {recipe.instructions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </section>
    </div>
  );
};
export default RecipeDetails;
