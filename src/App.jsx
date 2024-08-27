import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from './redux/auth/operations';
import { useEffect } from 'react';
import { selectIsRefreshing } from './redux/auth/selectors';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const App = () => {
  const isRefresh = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefresh ? null : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path='tasks'
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />
        <Route
          path='info'
          element={
            <PrivateRoute>
              <h2>lorem ipsum</h2>
            </PrivateRoute>
          }
        />
        <Route
          path='login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='signup'
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
export default App;
