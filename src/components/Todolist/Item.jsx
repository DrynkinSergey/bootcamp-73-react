import { OctagonX } from 'lucide-react';
import s from './Todolist.module.css';
const Item = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <li className={s.item}>
      <input checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} type='checkbox' />
      <p>{todo.todo}</p>
      <button onClick={() => handleDeleteTodo(todo.id)}>
        <OctagonX />
      </button>
    </li>
  );
};
export default Item;
