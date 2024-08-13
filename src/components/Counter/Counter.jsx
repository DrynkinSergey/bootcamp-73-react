import { useEffect, useMemo, useRef, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  const [stateCount, setStateCount] = useState(0);
  // const result = calcSomeValue();
  // const result = useMemo(() => {
  //   console.log('Start');
  //   let a;
  //   let b;
  //   for (let i = 0; i < 1_000_000_000; i++) {
  //     a + b;
  //   }
  //   console.log('Finish');
  //   return x * x;
  // }, [x]);
  const renderCount = useRef(0);

  const btnRef = useRef();

  const fileRef = useRef();
  useEffect(() => {
    // setStateCount(prev => prev + 1);❌
    // console.log('Render count:', stateCount); ❌
    console.log('Render count:', ++renderCount.current);
  });

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex items-center flex-col justify-center gap-4'>
        <button className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={() => setCount(prev => prev - 1)}>
          Decrement
        </button>
        <h1 className='text-3xl'>{count}</h1>
        <button ref={btnRef} className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={() => setCount(prev => prev + 1)}>
          Increment
        </button>
        <button className='px-4 py-2 bg-teal-500 text-white font-bold' onClick={() => setX(prev => prev + 1)}>
          {x} - Increment X
        </button>
      </div>
      <div>
        <button onClick={() => fileRef.current.click()} className='px-4 py-2 bg-teal-500 text-white font-bold'>
          Add file
        </button>
        <input className='invisible' ref={fileRef} type='file' />
      </div>
    </div>
  );
};
export default Counter;
