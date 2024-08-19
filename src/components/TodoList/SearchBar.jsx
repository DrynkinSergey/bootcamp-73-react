import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { changeSearch } from '../../redux/todolist/actions';
const SearchBar = () => {
  const dispatch = useDispatch();
  return <input type='text' onChange={e => dispatch(changeSearch(e.target.value))} className={s.input} placeholder='Enter search value...' />;
};
export default SearchBar;
