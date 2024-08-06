import s from './Todolist.module.css';
const SearchBar = () => {
  return <input type='text' className={s.input} placeholder='Enter search value...' />;
};
export default SearchBar;
