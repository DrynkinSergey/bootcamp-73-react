import clsx from 'clsx';
import s from './Header.module.css';
const Header = () => {
  return (
    <header className='flex items-center justify-between px-4 py-1 bg-teal-500 text-white'>
      <h2>Logo</h2>
      <ul className={s.list}>
        <li>Home</li>
        <li className={clsx('1', s.hello)}>About</li>
      </ul>
    </header>
  );
};

export default Header;
