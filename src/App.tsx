import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
          {Array(9).fill(null).map((tile) => (
              <div data-testid={'tile'}>x</div>
          ))}
      </div>
    </div>
  );
}

export default App;
