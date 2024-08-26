import { useSelector } from 'react-redux';
import SignupForm from '../components/SignupForm';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const Signup = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to='/tasks' />;
  }
  return <SignupForm />;
};
export default Signup;
