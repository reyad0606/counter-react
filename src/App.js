import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(42);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className='App'>
      <h2 className='counter'>Counter</h2>
      <span>{count}</span>
      <button className='counter-button' onClick={incrementCount}>
        Click
      </button>
    </div>
  );
}

export default App;
