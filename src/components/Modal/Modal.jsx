import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ onClose, children, title = 'Default modal' }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handlePressKey = e => {
      console.log(e.key);
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handlePressKey);

    const intervalId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);
    const timeoutId = setTimeout(() => {
      console.log('Timeout');
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      document.removeEventListener('keydown', handlePressKey);
      console.log('Unmount modal');
    };
  }, [onClose]);

  return (
    <section onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </section>
  );
};

export default Modal;
