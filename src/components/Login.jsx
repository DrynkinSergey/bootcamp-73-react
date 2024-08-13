import { Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { authContext } from '../context/AuthProvider';

const Login = () => {
  const { login, token } = useContext(authContext);
  const handleSubmit = (values, options) => {
    console.log(values);
    login(values.email);
    options.resetForm();
  };
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
            id nisi. {token}
          </p>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <Field name='email' type='email' placeholder='email' className='input input-bordered' required />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <Field name='password' type='password' placeholder='password' className='input input-bordered' required />
              </div>
              <div className='form-control mt-6'>
                <button type='submit' className='btn btn-primary'>
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Login;
