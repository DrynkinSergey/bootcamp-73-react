import { Field, Form, Formik } from 'formik';
import { Tags } from './Tags';

const SearchBar = ({ setQuery, query, tags }) => {
  const initialValues = {
    query,
  };
  const handleSubmit = values => {
    console.log(values);
    setQuery(values.query);
  };
  return (
    <div className='my-4 flex gap-4 justify-center'>
      <Tags tags={tags} query={query} setQuery={setQuery} />
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
