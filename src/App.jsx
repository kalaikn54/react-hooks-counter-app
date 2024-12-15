import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [num, setNum] = useState(1);

  const handleAdd = () => {
    setNum((currentVal) => currentVal + 1);
  };

  const handleSubtract = () => {
    setNum((currentVal) => (currentVal > 0 ? currentVal - 1 : 0));
  };

  const resetCounter = () => {
    setNum(0);
  };

  return (
    <div className="app-container">
      <h1 className="title">React Hooks Counter</h1>
      <div className="counter-display">{num}</div>
      <div className="button-group">
        <button className="button add-button" onClick={handleAdd}>
          Add
        </button>
        <button className="button subtract-button" onClick={handleSubtract}>
          Subtract
        </button>
        <button className="button reset-button" onClick={resetCounter}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
