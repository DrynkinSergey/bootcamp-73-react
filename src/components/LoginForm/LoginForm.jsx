import s from './LoginForm.module.css';
const LoginForm = () => {
  return (
    <div className={s.formWrapper}>
      <form className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input placeholder='Enter name...' className={s.input} />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input placeholder='Enter email...' className={s.input} />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input placeholder='Enter password...' className={s.input} />
        </label>
        <button className={s.btn}>Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
