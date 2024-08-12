import { Field, Form, Formik } from 'formik';

const SearchBar = ({ handleChangeQuery }) => {
  const handleSubmit = values => {
    handleChangeQuery(values.query);
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={{ query: '' }}>
      <Form className='flex justify-center py-4 px-4 gap-2'>
        <Field name='query' className='shadow-md p-3' />
        <button type='submit' className='bg-teal-500 text-white shadow-md px-4 py-2'>
          Search
        </button>
      </Form>
    </Formik>
  );
};
export default SearchBar;
