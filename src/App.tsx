import React from 'react';
import './App.css';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter>
        { (count, setCount) => (
          <div>{count}
            <button
              onClick={() => setCount(count + 1)}>Add 1</button>
          </div>)}
        </Counter>

    </div>
  );
}

export default App;
