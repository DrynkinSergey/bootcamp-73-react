import { useState } from 'react';
import s from './Form.module.css';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ label, name, placeholder, onChange, value, type = 'text' }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <label className={s.label}>
      <span>{label}</span>
      <div className={s.inputPassword}>
        <input onChange={onChange} placeholder={placeholder} value={value} type={isOpen ? 'text' : type} name={name} />
        <button type='button' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaEye className={s.icon} /> : <FaEyeSlash className={s.icon} />}
        </button>
      </div>
    </label>
  );
};
export default PasswordInput;
