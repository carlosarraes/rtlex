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

test('Check initial condition of checkbox', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /Change to blue/i });
  expect(colorButton).toBeEnabled();
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test('if the button disabled when checkbox is checked.', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: /Change to blue/i });
  const checkBox = screen.getByRole('checkbox');
  fireEvent.click(checkBox);
  expect(checkBox).toBeChecked();
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkBox);
  expect(checkBox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});