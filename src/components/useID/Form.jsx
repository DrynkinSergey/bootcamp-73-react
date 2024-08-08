import { useState } from 'react';
import Input from './Input';

const Form = () => {
  const [countOfIngredients, setCountOfIngredients] = useState(3);

  return (
    <div>
      <button onClick={() => setCountOfIngredients(prev => prev - 1)}>-</button>
      <h2>Count: {countOfIngredients}</h2>
      <button onClick={() => setCountOfIngredients(prev => prev + 1)}>+</button>
      <div>
        {Array(countOfIngredients)
          .fill('')
          .map((_, idx) => (
            <Input key={idx} />
          ))}
      </div>
    </div>
  );
};
export default Form;
