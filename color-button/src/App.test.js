import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Button has correct initial color and changes to blue when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: /Change to blue/i });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton).toHaveTextContent(/Change to red/i);
});
