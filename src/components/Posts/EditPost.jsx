import { Field, Form, Formik } from 'formik';

export const EditPost = ({ handleSubmit, initialValues }) => {
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='title' />
          <Field name='body' />
          <button type='submit'>Edit</button>
        </Form>
      </Formik>
    </div>
  );
};
