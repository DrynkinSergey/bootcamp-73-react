import { nanoid } from '@reduxjs/toolkit';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct } from '../../redux/productsSlice';
import { selectIsEdited, selectTempProduct } from '../../redux/selectors';

const AddForm = () => {
  const dispatch = useDispatch();
  const isEdited = useSelector(selectIsEdited);
  const tempProduct = useSelector(selectTempProduct);
  const handleSubmit = (values, options) => {
    console.log(values);
    const newProduct = { id: nanoid(), ...values };

    if (isEdited) {
      return dispatch(editProduct(values));
    }

    dispatch(addProduct(newProduct));
    options.resetForm();
  };

  const initialValues = {
    title: '',
    price: '',
    ...tempProduct,
  };
  return (
    <div>
      <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field className='input border-2 border-black' name='title' placeholder='Title of product' />
          <Field className='input border-2 border-black' name='price' placeholder='Price' />
          <button className='btn btn-primary' type='submit'>
            {isEdited ? 'Save changes' : 'Add product'}
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddForm;
