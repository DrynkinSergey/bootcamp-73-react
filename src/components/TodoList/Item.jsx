import { OctagonX } from 'lucide-react';
import s from './TodoList.module.css';
const Item = ({ todo }) => {
  return (
    <li className={s.item}>
      <input checked={todo.completed} type='checkbox' />
      <p>{todo.todo}</p>
      <button>
        <OctagonX />
      </button>
    </li>
  );
};
export default Item;
