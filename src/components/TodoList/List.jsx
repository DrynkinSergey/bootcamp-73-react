import Item from './Item';
import s from './TodoList.module.css';
const List = ({ todos }) => {
  return (
    <ul className={s.list}>
      {todos.map(item => (
        <Item key={item.id} todo={item} />
      ))}
    </ul>
  );
};
export default List;
