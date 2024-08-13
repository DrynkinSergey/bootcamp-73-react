import { createContext, useState } from 'react';
import UseContextExample from './components/useContextExample/UseContextExample';

export const myContext = createContext();

const App = () => {
  const [auto, setAuto] = useState('Audi');
  return (
    <myContext.Provider value={{ model: 'RS6', engine: 5.0 }}>
      <UseContextExample auto={auto} />;
    </myContext.Provider>
  );
};
export default App;
