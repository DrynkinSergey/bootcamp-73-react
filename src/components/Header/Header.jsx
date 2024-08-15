import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';
const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && 'activeLinkHeader');
  };
  return (
    <header className='flex items-center justify-between px-4 py-1 bg-teal-500 text-white'>
      <h2>Logo</h2>
      <ul className={s.list}>
        <li>
          <NavLink className={buildLinkClass} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to='/users'>
            Users
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
