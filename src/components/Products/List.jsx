import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectProducts } from '../../redux/selectors';
import { deleteProduct, setEditedTempProduct } from '../../redux/productsSlice';

const List = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const filteredData = products.filter(product => product.title.toLowerCase().includes(filter.toLowerCase()));
  const handleEditProduct = product => {
    dispatch(setEditedTempProduct(product));
  };
  return (
    <div>
      <h2>Products</h2>
      <ul className='flex flex-col p-4 gap-4'>
        {filteredData.map(product => (
          <li className='flex justify-between shadow-[2px_2px_3px_3px_teal] p-3 items-center' key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.price}$</p>
            <div className='flex gap-2'>
              <button className='btn btn-accent' onClick={() => handleEditProduct(product)}>
                Edit
              </button>
              <button className='btn btn-secondary' onClick={() => dispatch(deleteProduct(product.id))}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
