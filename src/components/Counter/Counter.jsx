import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex items-center justify-center gap-4'>
        <button className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={() => setCount(prev => prev - 1)}>
          Decrement
        </button>
        <h1 className='text-3xl'>{count}</h1>
        <button className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={() => setCount(prev => prev + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};
export default Counter;
