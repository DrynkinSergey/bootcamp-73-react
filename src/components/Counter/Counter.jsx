import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const step = useSelector(state => state.counter.step);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const handleChangeStep = e => {
    dispatch({ type: 'CHANGE_STEP', payload: +e.target.value });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex items-center  justify-center gap-4'>
        <input value={step} onChange={handleChangeStep} className='input border-2 border-black' type='text' />

        <button className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={handleDecrement}>
          Decrement
        </button>
        <h1 className='text-3xl'>{counter}</h1>
        <button className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={handleIncrement}>
          Increment
        </button>
        <button className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
};
export default Counter;
