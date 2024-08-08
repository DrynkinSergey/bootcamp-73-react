import Item from './Item';
import s from './Todolist.module.css';
const List = ({ todos, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <ul className={s.list}>
      {todos.map(item => (
        <Item key={item.id} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} todo={item} />
      ))}
    </ul>
  );
};
export default List;
