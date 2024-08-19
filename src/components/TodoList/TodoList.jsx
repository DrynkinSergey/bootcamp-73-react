import AddForm from './AddForm';
import Filter from './Filter';
import List from './List';
import SearchBar from './SearchBar';
import s from './TodoList.module.css';
const Todolist = () => {
  return (
    <div className={s.wrapperTodolist}>
      <section className={s.actionSection}>
        <SearchBar />
        <AddForm />
      </section>
      <Filter />
      <List />
    </div>
  );
};
export default Todolist;
