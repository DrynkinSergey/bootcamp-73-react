import { useId } from 'react';

const Input = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Custom label input</label>
      <input type='text' id={id} />
    </div>
  );
};
export default Input;
