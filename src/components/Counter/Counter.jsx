import { useEffect, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  // Виконається лише один раз!
  useEffect(() => {
    console.log('Component was mount');
  }, []);

  // Виконається ПЕРШИЙ РАЗ а також всі наступні, коли міняяється Сounter!
  useEffect(() => {
    console.log('Counter was updated! :', counter);
    if (counter === 5) {
      console.log('Твій лічильник вже дорівнює 5. Продовжуй далі!');
    }
    if (counter === 10) {
      console.log('Не так швидко!');
      setCounter(0);
    }
  }, [counter]);

  // Виконається ПЕРШИЙ РАЗ а також всі настпні, коли міняється Step!
  useEffect(() => {
    console.log('Step was updated! :', step);
  }, [step]);

  // Може бути не одна залежність в массиві!
  useEffect(() => {
    console.log('Step or Counter was updated!');
  }, [step, counter]);

  const handleMinusClick = () => {
    setCounter(prev => prev - step);
  };

  const handleResetClick = () => {
    setCounter(0);
    setStep(1);
  };

  const handlePlusClick = () => {
    // if (counter === 5) {
    //   return setCounter(0);
    // }
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    setCounter(prev => prev + step);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>

        <input value={step} onChange={e => setStep(+e.target.value)} />
        <div className={s.flex}>
          <button onClick={handleMinusClick} className='btn'>
            minus
          </button>
          <button onClick={handleResetClick} className='btn'>
            reset
          </button>
          <button onClick={handlePlusClick} className='btn'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
