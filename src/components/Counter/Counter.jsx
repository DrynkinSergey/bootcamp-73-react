import { useDispatch, useSelector } from 'react-redux';
import { selectCounter, selectStep } from '../../redux/counter/selectors';
import { changeStep, decrement, increment, reset } from '../../redux/counter/slice';

const Counter = () => {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleChangeStep = e => {
    dispatch(changeStep(+e.target.value));
  };

  const resetState = () => {
    dispatch(reset());
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
        <button className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={resetState}>
          RESET
        </button>
      </div>
    </div>
  );
};
export default Counter;
