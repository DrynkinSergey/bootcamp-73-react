import { OctagonX } from 'lucide-react';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todolist/slice';
import { deleteTodoThunk } from '../../redux/todolist/todosOps';
const Item = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <input checked={todo.completed} type='checkbox' />
      <p>{todo.todo}</p>
      <button onClick={() => dispatch(deleteTodoThunk(todo.id))}>
        <OctagonX />
      </button>
    </li>
  );
};
export default Item;
