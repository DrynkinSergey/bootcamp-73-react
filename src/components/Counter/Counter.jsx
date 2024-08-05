import s from './Counter.module.css';

export const Counter = () => {
  const handleMinusClick = () => {
    // e.target.innerHTML = 'CLICK BTN';
    // console.log({ x: e.pageX, y: e.pageY });
    console.log('Welcome!');
  };

  const handleResetClick = (event, name) => {
    console.log(`Hello, ${name}`);
    console.log(event);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>

        <input />
        <div className={s.flex}>
          <button onClick={handleMinusClick} className='btn'>
            minus
          </button>
          <button onClick={e => handleResetClick(e, 'Alex')} className='btn'>
            reset
          </button>
          <button onClick={() => console.log('Hello, user!')} className='btn'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
