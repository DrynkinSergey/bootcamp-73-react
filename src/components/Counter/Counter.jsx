import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  // useState under the hood
  // const setMyCounter = initialValue => {
  //   let value = initialValue;
  //   const changeValue = newValue => {
  //     value = newValue;
  //   };
  //   return [value, changeValue];
  // };

  const handleMinusClick = () => {
    // if (counter < 1) return;
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
