import s from './Todolist.module.css';
const Filter = ({ setSortType }) => {
  return (
    <section className={s.filter}>
      <button onClick={() => setSortType('all')} className={s.filterBtn}>
        All
      </button>
      <button onClick={() => setSortType('active')} className={s.filterBtn}>
        Active
      </button>
      <button onClick={() => setSortType('completed')} className={s.filterBtn}>
        Completed
      </button>
    </section>
  );
};
export default Filter;
