import { useSelector } from 'react-redux';
import Todolist from '../components/TodoList/TodoList';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Tasks = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    toast.error('Sorry but this resource is private! Please login!');
    return <Navigate to='/login' />;
  }
  return <Todolist />;
};
export default Tasks;
