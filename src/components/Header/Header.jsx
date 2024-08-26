import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
import GuestBar from './GuestBar';
const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && 'activeLinkHeader');
  };
  return (
    <header className='flex items-center justify-between px-4 text-2xl py-3 bg-teal-500 text-white'>
      <h2>Auth</h2>
      <ul className={s.list}>
        <li>
          <NavLink className={buildLinkClass} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to='/tasks'>
            Tasks
          </NavLink>
        </li>
        <GuestBar />
      </ul>
    </header>
  );
};

export default Header;
