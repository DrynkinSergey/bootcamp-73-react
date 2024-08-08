import { useState } from 'react';
import s from './Todolist.module.css';
const AddForm = ({ handleAddTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    handleAddTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit} className={s.addForm}>
      <input value={value} onChange={e => setValue(e.target.value)} className={s.input} type='text' />
      <button className={s.btn}>Add todo</button>
    </form>
  );
};
export default AddForm;
