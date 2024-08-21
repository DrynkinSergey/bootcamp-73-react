import { Field, Form, Formik } from 'formik';

const SearchBar = ({ setQuery, query }) => {
  const initialValues = {
    query,
  };
  const handleSubmit = values => {
    console.log(values);
    setQuery(values.query);
  };
  return (
    <div className='my-4'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='flex gap-2 items-center justify-center'>
          <Field className='input input-bordered input-primary w-full max-w-xs' name='query' placeholder='Search...' />
          <button className='btn btn-primary' type='submit'>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
