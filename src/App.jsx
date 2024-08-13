import { useContext } from 'react';
import Todolist from './components/Todolist/Todolist';
import Header from './components/Header/Header';
import { authContext } from './context/AuthProvider';
import Login from './components/Login';

const App = () => {
  const { isLoggedIn } = useContext(authContext);
  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <>
      <Header />
      <Todolist />
    </>
  );
};
export default App;
