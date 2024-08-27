import { useState } from 'react';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodoThunk } from '../../redux/todolist/todosOps';
const AddForm = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = { id: nanoid(), todo: value, completed: false };

    dispatch(addTodoThunk(newTodo));
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