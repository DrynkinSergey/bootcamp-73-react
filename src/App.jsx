import { useState } from 'react';
import { Counter } from './components/Counter/Counter';
import Modal from './components/Modal/Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal}>Show modal</button>
      <Counter />
      {isOpen && (
        <Modal onClose={toggleModal}>
          <section>PROPS SECTION FROM APP</section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi optio ipsa debitis animi ab rem perferendis
          praesentium asperiores maxime quam soluta exercitationem, temporibus cumque, sunt deserunt libero vero odit
          dolorem!
        </Modal>
      )}
    </>
  );
};

export default App;
