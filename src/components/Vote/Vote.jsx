import { useState } from 'react';

export const Vote = () => {
  const [options, setOptions] = useState({
    mac: 0,
    windows: 0,
    linux: 0,
  });

  const handleChangeValue = option => {
    console.log(option);
    // if (option === 'mac') {
    //   setOptions(prev => {
    //     return {
    //       ...prev,
    //       mac: prev.mac + 1,
    //     };
    //   });
    // }
    // if (option === 'windows') {
    //   setOptions(prev => {
    //     return {
    //       ...prev,
    //       windows: prev.windows + 1,
    //     };
    //   });
    // }
    // if (option === 'linux') {
    //   setOptions(prev => {
    //     return {
    //       ...prev,
    //       linux: prev.linux + 1,
    //     };
    //   });
    // }

    setOptions(prev => {
      return {
        ...prev,
        // if option === mac =>>>
        // mac: prev.mac + 1
        [option]: prev[option] + 1,
      };
    });
  };

  const btns = Object.keys(options);

  return (
    <div>
      <ul>
        <li>Mac: {options.mac}</li>
        <li>Windows: {options.windows}</li>
        <li>Linux: {options.linux}</li>
      </ul>
      <div>
        {btns.map(btn => (
          <button key={btn} onClick={() => handleChangeValue(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};
