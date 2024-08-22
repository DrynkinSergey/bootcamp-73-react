import { useDispatch, useSelector } from 'react-redux';
import AddForm from './AddForm';
import Filter from './Filter';
import List from './List';
import SearchBar from './SearchBar';
import s from './TodoList.module.css';
import { useEffect } from 'react';
import { fetchTodosThunk } from '../../redux/todolist/todosOps';
import { selectIsError, selectIsLoading } from '../../redux/todolist/selectors';
const Todolist = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  console.log(isError);

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);
  return (
    <div className={s.wrapperTodolist}>
      <section className={s.actionSection}>
        <SearchBar />
        <AddForm />
      </section>
      <Filter />
      <List />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error</h2>}
    </div>
  );
};
export default Todolist;
