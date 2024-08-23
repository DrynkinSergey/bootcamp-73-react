import { useSelector } from 'react-redux';
import Item from './Item';
import s from './TodoList.module.css';
import { selectFilteredTodosMemo, selectUncompletedTodosMemo } from '../../redux/todolist/selectors';
const List = () => {
  const todos = useSelector(selectFilteredTodosMemo);
  const uncompleted = useSelector(selectUncompletedTodosMemo);
  return (
    <>
      <h2 className='text-center'>Uncompleted todos: {uncompleted}</h2>
      <ul className={s.list}>
        {todos.map(item => (
          <Item key={item.id} todo={item} />
        ))}
      </ul>
    </>
  );
};
export default List;
