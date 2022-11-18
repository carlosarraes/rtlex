import './App.css';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: `${bgColor ? 'blue' : 'red'}` }}
        onClick={() => setBgColor((prevState) => !prevState)}
      >
        {bgColor ? 'Change to red' : 'Change to blue'}
      </button>
    </div>
  );
}

export default App;
