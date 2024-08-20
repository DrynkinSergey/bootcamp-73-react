import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { changeFilter } from '../../redux/todolist/slice';
const Filter = () => {
  const dispatch = useDispatch();
  return (
    <section className={s.filter}>
      <button onClick={() => dispatch(changeFilter('all'))} className={s.filterBtn}>
        All
      </button>
      <button onClick={() => dispatch(changeFilter('active'))} className={s.filterBtn}>
        Active
      </button>
      <button onClick={() => dispatch(changeFilter('completed'))} className={s.filterBtn}>
        Completed
      </button>
    </section>
  );
};
export default Filter;
