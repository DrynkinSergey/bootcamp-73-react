import { useState } from 'react';
import s from './Form.module.css';
import PasswordInput from './PasswordInput';
import CustomInput from './CustomInput';
const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  age: '',
  gender: 'male',
  country: '',
  about: '',
  agree: true,
};

const FormObject = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  // const handleChangeUsername = e => {
  //   setFormData({ ...formData, username: e.target.value });
  // };
  // const handleChangeEmail = e => {
  //   setFormData({ ...formData, email: e.target.value });
  // };
  // const handleChangePassword = e => {
  //   setFormData({ ...formData, password: e.target.value });
  // };
  const handleChangeInput = e => {
    const { name, value, type } = e.target; //

    if (type === 'checkbox') {
      return setFormData({ ...formData, [name]: !formData[name] }); // agree: !data.agree -> agree: !true
    }

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormData(INITIAL_STATE);
  };
  return (
    <div className={s.formWrapper}>
      <form onSubmit={onSubmit} className={s.form}>
        <CustomInput label='Name:' name='username' placeholder='Enter name...' onChange={handleChangeInput} value={formData.username} />
        <CustomInput label='Email:' name='email' placeholder='Enter email...' onChange={handleChangeInput} value={formData.email} />
        <PasswordInput label='Password:' name='password' onChange={handleChangeInput} value={formData.password} type='password' />
        <PasswordInput label='Confirm pass:' name='confirm' onChange={handleChangeInput} value={formData.confirm} type='password' />

        <label className={s.label}>
          <span>Age:</span>
          <input onChange={handleChangeInput} placeholder='Enter age...' value={formData.age} className={s.input} type='number' name='age' />
        </label>
        <label className={s.label}>
          <span>Country:</span>
          <select name='country' className={s.input} onChange={handleChangeInput} value={formData.country}>
            <option disabled value=''>
              Choose your country...
            </option>
            <option value='Ukraine'>Ukraine</option>
            <option value='USA'>USA</option>
            <option value='Canada'>Canada</option>
          </select>
        </label>
        <label>
          <input onChange={handleChangeInput} checked={formData.gender === 'male'} type='radio' name='gender' value='male' />
          <span>Male</span>
        </label>

        <label>
          <input onChange={handleChangeInput} checked={formData.gender === 'female'} type='radio' name='gender' value='female' />
          <span>Female</span>
        </label>
        <label>
          <input onChange={handleChangeInput} checked={formData.gender === 'other'} type='radio' name='gender' value='other' />
          <span>Other</span>
        </label>
        <label className={s.label}>
          <span>About me:</span>
          <textarea onChange={handleChangeInput} placeholder='Enter more info about me...' value={formData.about} className={s.input} name='about' />
        </label>
        <label>
          <input onChange={handleChangeInput} checked={formData.agree} className={s.input} type='checkbox' name='agree' />
          <span> I confirm rules!</span>
        </label>

        <button className={s.btn}>Login</button>
      </form>
    </div>
  );
};
export default FormObject;
