import { Link } from 'react-router-dom';
import s from './Header.module.css';
const Header = () => {
  return (
    <header className='flex items-center justify-between px-4 py-1 bg-teal-500 text-white'>
      <h2>Logo</h2>
      <ul className={s.list}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
