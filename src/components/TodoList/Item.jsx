import { OctagonX } from 'lucide-react';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodoThunk, renameTodoThunk, toggleTodoThunk } from '../../redux/todolist/todosOps';
const Item = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <input onChange={() => dispatch(toggleTodoThunk(todo))} checked={todo.completed} type='checkbox' />
      <p onClick={() => dispatch(renameTodoThunk({ ...todo, todo: prompt('enter new todo:') }))}>{todo.todo}</p>
      <button onClick={() => dispatch(deleteTodoThunk(todo.id))}>
        <OctagonX />
      </button>
    </li>
  );
};
export default Item;
