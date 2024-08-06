import Item from './Item';
import s from './Todolist.module.css';
const List = ({ todos, handleDeleteTodo }) => {
  return (
    <ul className={s.list}>
      {todos.map(item => (
        <Item key={item.id} handleDeleteTodo={handleDeleteTodo} todo={item} />
      ))}
    </ul>
  );
};
export default List;
