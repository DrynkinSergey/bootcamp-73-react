import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './Register.module.css';
import { nanoid } from 'nanoid';

import * as Yup from 'yup';

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
    console.log(values);
    options.resetForm();
  };

  const registerSchema = Yup.object({
    name: Yup.string().min(3, 'Не менше ніж 3 символи!').max(10, 'Не більше ніж 10 символів!').required("Це поле обов'язкове!"),
    email: Yup.string().required("Це поле обов'язкове!").email('Це не емейл!'),
    password: Yup.string().required("Це поле обов'язкове!").min(7).max(22),
    country: Yup.string().required().oneOf(['Brazil', 'Ukraine', 'Comboja']),
  });

  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registerSchema}>
        <Form className={s.form}>
          <label>
            <span>Name:</span>
            <Field type='text' name='name' />
            <ErrorMessage className={s.error} name='name' component='div' />
          </label>
          <label>
            <span>Email:</span>
            <Field type='email' name='email' />
            <ErrorMessage className={s.error} name='email' component='div' />
          </label>
          <label>
            <span>Password:</span>
            <Field type='password' name='password' />
            <ErrorMessage className={s.error} name='password' component='div' />
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
            <ErrorMessage className={s.error} name='country' component='div' />
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
