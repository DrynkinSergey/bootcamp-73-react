import s from './Header.module.css';
const Header = () => {
  return (
    <header className={s.header}>
      <h2>Logo</h2>
      <ul className={s.list}>
        <li>Home</li>
        <li>About</li>
      </ul>
    </header>
  );
};

export default Header;
