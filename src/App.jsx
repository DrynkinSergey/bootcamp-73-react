import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/about' element={<h2>About</h2>} />
      </Routes>
    </div>
  );
};
export default App;
