import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const GuestBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && 'activeLinkHeader');
  };
  return (
    <>
      <li>
        <NavLink className={buildLinkClass} to='/login'>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className={buildLinkClass} to='/signup'>
          SignUp
        </NavLink>
      </li>
    </>
  );
};
export default GuestBar;
