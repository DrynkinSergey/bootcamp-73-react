import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='recipes' element={<Recipes />} />
        <Route path='recipes/:recipeId' element={<RecipeDetails />} />
        <Route path='favorites' element={<Favorites />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
export default App;
