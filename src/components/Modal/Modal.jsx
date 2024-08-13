import { useCallback, useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ onClose, children, title = 'Default modal' }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePressKey = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );
  // xd10r1
  // x10r01
  // x10r01
  // x10r01
  // x10r01
  // x10r01
  // x10r01
  // x10r01

  useEffect(() => {
    document.addEventListener('keydown', handlePressKey);
    return () => {
      document.removeEventListener('keydown', handlePressKey);
    };
  }, [handlePressKey]);

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
