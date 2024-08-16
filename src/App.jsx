import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
// import Home from './pages/Home';
// import About from './pages/About';
// import NotFound from './pages/NotFound';
// import Users from './pages/Users';
// import UserPage from './pages/UserPage';
// import Info from './components/Nested/Info';
// import Posts from './components/Nested/Posts';
// import Comments from './components/Nested/Comments';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Info = lazy(() => import('./components/Nested/Info'));
const About = lazy(() => import('./pages/About'));
const Users = lazy(() => import('./pages/Users'));
const UserPage = lazy(() => import('./pages/UserPage'));
const Posts = lazy(() => import('./components/Nested/Posts'));
const Comments = lazy(() => import('./components/Nested/Comments'));
const NotFound = lazy(() => import('./pages/NotFound'));
const App = () => {
  return (
    <Suspense fallback={<h2>Outer suspense</h2>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='users' element={<Users />} />

          <Route path='users/:userId' element={<UserPage />}>
            <Route path='info' element={<Info />} />
            <Route path='posts' element={<Posts />}>
              <Route path='comments/:postId' element={<Comments />} />
            </Route>
          </Route>
          {/* http://localhost:5173/users/1/info/me */}
          {/* http://localhost:5173/users/2/posts */}
          {/* http://localhost:5173/users/33 */}
          {/* http://localhost:5173/users/331 */}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
export default App;
