import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
const AddPost = ({ handleAddPost }) => {
  // Створюємо поля для форми
  const initialValues = {
    title: '',
    body: '',
  };
  // Схема валідації
  const postSchema = Yup.object({
    title: Yup.string().min(4, 'Must be more than 4').max(32, 'Must be less than 32').required('Is required!'),
    body: Yup.string().min(10, 'Must be more than 10').max(128, 'Must be less than 128').required('Is required!'),
  });

  // Сабміт форми
  const handleSubmit = (values, options) => {
    handleAddPost(values);
    // Очистка форми
    options.resetForm();
  };
  return (
    <div>
      <Formik validationSchema={postSchema} initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field name='title' />
            <ErrorMessage name='title' component='div' />
          </label>
          <label>
            <Field name='body' />
            <ErrorMessage name='body' component='div' />
          </label>
          <button type='submit'>Add post</button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddPost;
