import { Field, Form, Formik } from 'formik';
import s from './Register.module.css';
import { nanoid } from 'nanoid';
const Register = () => {
  // 1. Встановити Formik
  // 2. Створити обгортку <Formik></Formik>
  // 3. Додати в обгортку <Form></Form>
  // 4. Додати <Field/> з пропсом name='smth'
  // 5. Створити об'єкт початкового стану initialValues
  // 6. Створити хендлер для сабміту. Xендлер приймає два аргумента (values, options).
  // Values - всі поля форми
  // Options - об'єкт з додатковими можливостями. options.resetForm() - очистка
  // 7. Передати створені значення в <Formik initialValues={initialValues} onSubmit={handleSubmit}/>

  const initialValues = { name: '', email: '', password: '', agree: '', gender: '', country: '', about: '' };
  const handleSubmit = (values, options) => {
    console.log({ ...values, id: crypto.randomUUID() });
    options.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <span>Name:</span>
            <Field type='text' name='name' />
          </label>
          <label>
            <span>Email:</span>
            <Field type='email' name='email' />
          </label>
          <label>
            <span>Password:</span>
            <Field type='password' name='password' />
          </label>
          <label>
            <span>About:</span>
            <Field as='textarea' name='about' />
          </label>
          <label>
            <span>Country:</span>
            <Field as='select' name='country'>
              <option value=''>Default value</option>
              <option value='Ukraine'>Ukraine</option>
              <option value='Brazil'>Brazil</option>
              <option value='Comboja'>Comboja</option>
            </Field>
          </label>
          <label className={s.flex}>
            <Field type='radio' name='gender' value='male' />
            <span>Male</span>
          </label>
          <label className={s.flex}>
            <Field type='radio' name='gender' value='female' />
            <span>Female</span>
          </label>

          <label className={s.flex}>
            <Field type='checkbox' name='agree' />
            <span>I confirm this rules</span>
          </label>
          <div className={s.btns}>
            <button type='submit'>Register</button>
            <button type='reset'>Reset</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default Register;
