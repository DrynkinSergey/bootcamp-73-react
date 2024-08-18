import s from './TodoList.module.css';
const Filter = () => {
  return (
    <section className={s.filter}>
      <button className={s.filterBtn}>All</button>
      <button className={s.filterBtn}>Active</button>
      <button className={s.filterBtn}>Completed</button>
    </section>
  );
};
export default Filter;
