import { useMemo, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);

  // const result = calcSomeValue();
  const result = useMemo(() => {
    console.log('Start');
    let a;
    let b;
    for (let i = 0; i < 1_000_000_000; i++) {
      a + b;
    }
    console.log('Finish');
    return x * x;
  }, [x]);

  const filteredData = useMemo(() => [].filter(item => item.id !== 1231), []);

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex items-center justify-center gap-4'>
        <h2>Result:{result}</h2>
        <button className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={() => setCount(prev => prev - 1)}>
          Decrement
        </button>
        <h1 className='text-3xl'>{count}</h1>
        <button className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={() => setCount(prev => prev + 1)}>
          Increment
        </button>
        <button className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={() => setX(prev => prev + 1)}>
          {x} - Increment X
        </button>
      </div>
    </div>
  );
};
export default Counter;
