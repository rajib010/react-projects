import React, { useState } from 'react';
import useTitleUpdater from './Hooks/useTitleUpdater';
import './index.css';

function App() {

  const [count, setCount] = useState(0);
  useTitleUpdater(count);
  return (
    <div className="contents">
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}> Click Me!!!</button>
    </div>
  )
}

export default App