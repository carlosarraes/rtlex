import './App.css';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: `${disabled ? 'gray' : bgColor ? 'blue' : 'red'}` }}
        onClick={() => setBgColor((prevState) => !prevState)}
        disabled={disabled}
      >
        {bgColor ? 'Change to red' : 'Change to blue'}
      </button>
      <input
        type='checkbox'
        name='control-btn'
        id='control-btn'
        onClick={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor='control-btn'>Disable button</label>
    </div>
  );
}

export default App;
