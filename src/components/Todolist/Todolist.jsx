import AddForm from './AddForm';
import Filter from './Filter';
import List from './List';
import SearchBar from './SearchBar';
import s from './Todolist.module.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
const Todolist = () => {
  // Створюємо стейти для роботи
  const [todos, setTodos] = useState(() => JSON.parse(window.localStorage.getItem('todos')) ?? []);
  const [searchValue, setSearchValue] = useState('');
  const [sortType, setSortType] = useState('all');

  // Записуємо туду в локал сторейдж
  useEffect(() => {
    // При кожній зміні todos - оновлюєть LS
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Додавання нової туду
  const handleAddTodo = todo => {
    // Створення нового об'єкта
    const newItem = { id: nanoid(), todo, completed: false };
    // Розпилення всіх старих і додавання нового
    setTodos(prev => [...prev, newItem]);
  };

  // Перемикання туду (отримуємо айді і шукаємо елемент по ньому)
  const handleToggleTodo = id => {
    // Якщо елемент знайшли - міняємо його стан на протилежний , для збереження всього об'єкту розсипаємо старий айтем
    // Якщо не знайшли  - повертаємо без змін
    setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };

  // Видалення
  const handleDeleteTodo = id => {
    // видаляємо якщо співпав айді
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  // Пошук по слову або частині слова в туду
  // Якщо туду включає частину значення з інпуту - додаємо в новий массив цей айтем
  const filteredData = todos.filter(item => item.todo.includes(searchValue));

  // Функція для сортування по статусу (виконано, не виконано, всі)
  const getSortElements = todos => {
    // беремо тип (active | completed | all) і стежимо що повернути
    switch (sortType) {
      case 'all':
        return todos;
      case 'active':
        // Невиконані
        return todos.filter(item => !item.completed);
      case 'completed':
        // виконані
        return todos.filter(item => item.completed);

      default:
        // Всі
        return todos;
    }
  };

  // Отримання відсортованих та відфільтрованих значень
  const sortedData = getSortElements(filteredData);
  return (
    <div className={s.wrapperTodolist}>
      <section className={s.actionSection}>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <AddForm handleAddTodo={handleAddTodo} />
      </section>
      <Filter setSortType={setSortType} />
      <List todos={sortedData} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} />
    </div>
  );
};
export default Todolist;
