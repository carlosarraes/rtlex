import './App.css';
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [bgColor, setBgColor] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        style={{
          backgroundColor: `${disabled ? 'gray' : bgColor ? 'MidnightBlue' : 'MediumVioletRed'}`,
        }}
        onClick={() => setBgColor((prevState) => !prevState)}
        disabled={disabled}
      >
        Change to{' '}
        {bgColor
          ? replaceCamelWithSpaces('MediumVioletRed')
          : replaceCamelWithSpaces('MidnightBlue')}
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
