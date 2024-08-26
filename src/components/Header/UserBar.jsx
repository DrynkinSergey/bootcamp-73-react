import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';

const UserBar = () => {
  const dispatch = useDispatch();
  return (
    <li>
      <button onClick={() => dispatch(logoutThunk())}>Exit</button>
    </li>
  );
};
export default UserBar;
