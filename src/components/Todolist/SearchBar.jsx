import s from './Todolist.module.css';
const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type='text' className={s.input} placeholder='Enter search value...' />
  );
};
export default SearchBar;
