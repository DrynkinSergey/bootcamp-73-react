import clsx from 'clsx';
import s from './Header.module.css';
import { useContext } from 'react';
import { authContext } from '../../context/AuthProvider';
const Header = () => {
  const { logout, user } = useContext(authContext);
  return (
    <header className='flex items-center justify-between px-4 py-1 bg-teal-500 text-white'>
      <h2>Logo</h2>
      <p>{user}</p>
      <ul className={s.list}>
        <li>Home</li>
        <li className={clsx('1', s.hello)}>About</li>
        <li>
          <button onClick={logout} className='btn btn-primary'>
            Logout
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
