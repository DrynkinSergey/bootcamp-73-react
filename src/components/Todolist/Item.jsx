import { OctagonX } from 'lucide-react';
import s from './Todolist.module.css';
const Item = ({ todo, handleDeleteTodo }) => {
  return (
    <li className={s.item}>
      <input type='checkbox' />
      <p>{todo.todo}</p>
      <button onClick={() => handleDeleteTodo(todo.id)}>
        <OctagonX />
      </button>
    </li>
  );
};
export default Item;
