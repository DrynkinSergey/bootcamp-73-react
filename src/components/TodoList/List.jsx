import { useSelector } from 'react-redux';
import Item from './Item';
import s from './TodoList.module.css';
import { selectFilter, selectTodos } from '../../redux/todolist/selectors';
const List = () => {
  const todos = useSelector(selectTodos);
  const search = useSelector(state => state.todolist.search);
  const filter = useSelector(selectFilter);

  const filteredData = todos.filter(item => item.todo.toLowerCase().includes(search.toLowerCase()));

  const getSortElements = () => {
    switch (filter) {
      case 'all':
        return filteredData;
      case 'active':
        return filteredData.filter(item => !item.completed);
      case 'completed':
        return filteredData.filter(item => item.completed);
      default:
        return filteredData;
    }
  };

  return (
    <ul className={s.list}>
      {getSortElements().map(item => (
        <Item key={item.id} todo={item} />
      ))}
    </ul>
  );
};
export default List;
