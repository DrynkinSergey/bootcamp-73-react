import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { RecipesList } from '../components/RecipesList';

const Favorites = () => {
  const favoritesRecipes = useSelector(selectFavorites);
  return (
    <div>
      <RecipesList recipes={favoritesRecipes} />
    </div>
  );
};
export default Favorites;
