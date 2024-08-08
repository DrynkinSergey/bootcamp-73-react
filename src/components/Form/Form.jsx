import { useState } from 'react';
import s from './Form.module.css';
const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('Rerender');

  const onSubmit = e => {
    e.preventDefault();
    console.log({ username, email, password });
    setUsername('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className={s.formWrapper}>
      <form onSubmit={onSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            onChange={e => setUsername(e.target.value)}
            value={username}
            placeholder='Enter name...'
            className={s.input}
            name='username'
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>

          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder='Enter email...'
            className={s.input}
            name='email'
          />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            placeholder='Enter password...'
            className={s.input}
            type='password'
            name='password'
          />
        </label>
        <button className={s.btn}>Login</button>
      </form>
    </div>
  );
};
export default Form;
