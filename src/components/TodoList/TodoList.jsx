import AddForm from './AddForm';
import Filter from './Filter';
import List from './List';
import SearchBar from './SearchBar';
import s from './TodoList.module.css';
import { useState } from 'react';
const Todolist = () => {
  const [todos, setTodos] = useState([]);

  // const getSortElements = todos => {
  //   switch (sortType) {
  //     case 'all':
  //       return todos;
  //     case 'active':
  //       return todos.filter(item => !item.completed);
  //     case 'completed':
  //       return todos.filter(item => item.completed);
  //     default:
  //       return todos;
  //   }
  // };

  return (
    <div className={s.wrapperTodolist}>
      <section className={s.actionSection}>
        <SearchBar />
        <AddForm />
      </section>
      <Filter />
      <List todos={todos} />
    </div>
  );
};
export default Todolist;
