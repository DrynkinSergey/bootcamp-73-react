import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h2>Home</h2>} />
          <Route path='about' element={<h2>About</h2>} />
        </Route>

        <Route path='/login' element={<h2>Login</h2>} />
      </Routes>
    </div>
  );
};
export default App;
