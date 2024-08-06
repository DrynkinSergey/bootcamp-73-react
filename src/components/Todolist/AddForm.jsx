import { useState } from 'react';
import s from './Todolist.module.css';
const AddForm = ({ handleAddTodo }) => {
  const [value, setValue] = useState('');

  return (
    <div className={s.addForm}>
      <input value={value} onChange={e => setValue(e.target.value)} className={s.input} type='text' />
      <button onClick={() => handleAddTodo(value)} className={s.btn}>
        Add todo
      </button>
    </div>
  );
};
export default AddForm;
