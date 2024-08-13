import { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/api';
import Modal from 'react-modal';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [tempImg, setTempImg] = useState(null);
  const closeModal = () => setIsOpen(false);
  const openModal = img => {
    setTempImg(img);
    setIsOpen(true);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(prev => [...prev, ...data.products]);
      } catch (error) {
        console.log('error');
      }
    };
    getData();
  }, []);
  return (
    <div>
      <ul className='grid grid-cols-3 gap-5'>
        {products.map(product => (
          <li key={product.id}>
            <img onClick={() => openModal(product.images[0])} src={product.thumbnail} />
          </li>
        ))}
      </ul>

      <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel='Example Modal'>
        <img src={tempImg} />
      </Modal>
    </div>
  );
};
export default Products;
