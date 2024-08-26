import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../redux/auth/operations';

const SignupForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>SignUP now!</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
            id nisi.
          </p>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <Field name='name' placeholder='name' className='input input-bordered' />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <Field name='email' type='email' placeholder='email' className='input input-bordered' />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <Field name='password' type='password' placeholder='password' className='input input-bordered' />
                <label className='label'>
                  <Link to='/login' className='label-text-alt link link-hover'>
                    You already have account? Sign in!
                  </Link>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>SignUP</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
