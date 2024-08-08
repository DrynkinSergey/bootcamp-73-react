import s from './Form.module.css';

const CustomInput = ({ label, name, placeholder, onChange, value, type = 'text' }) => {
  return (
    <label className={s.label}>
      <span>{label}</span>
      <input onChange={onChange} value={value} placeholder={placeholder} type={type} className={s.input} name={name} />
    </label>
  );
};
export default CustomInput;
