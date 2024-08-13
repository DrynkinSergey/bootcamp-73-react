import { useContext } from 'react';
import { myContext } from '../../App';

const D = ({ auto }) => {
  const { model, engine } = useContext(myContext);
  return (
    <div>
      <p>User info:</p>
      <h2>Auto: {auto}</h2>
      <h2>Model: {model}</h2>
      <h2>Engine: {engine}</h2>
    </div>
  );
};
export default D;
