import AddForm from './AddForm';
import Filter from './Filter';
import List from './List';
import SearchBar from './SearchBar';
import s from './Todolist.module.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
const Todolist = () => {
  // Для отримання з локалсторейдж
  const [todos, setTodos] = useState(() => JSON.parse(window.localStorage.getItem('todos')) ?? []);

  // Запис в локалсторейдж
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const handleAddTodo = todo => {
    console.log(todo);
    const newItem = { id: nanoid(), todo, completed: false };
    setTodos(prev => [...prev, newItem]);
  };
  const handleDeleteTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };
  return (
    <div className={s.wrapperTodolist}>
      <section className={s.actionSection}>
        <SearchBar />
        <AddForm handleAddTodo={handleAddTodo} />
      </section>
      <Filter />
      <List todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};
export default Todolist;
