import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

describe('Button and checkbox tests', () => {
  test('Button has correct initial color and changes to blue when clicked', () => {
    render(<App />);

    const colorButton = screen.getByRole('button', { name: /Change to Midnight Blue/i });
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
    expect(colorButton).toHaveTextContent(/Change to Medium Violet Red/i);
  });

  test('Check initial condition of checkbox', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: /Change to Midnight Blue/i });
    expect(colorButton).toBeEnabled();
    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).not.toBeChecked();
  });

  test('if the button disabled when checkbox is checked.', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: /Change to Midnight Blue/i });
    const checkBox = screen.getByRole('checkbox', { name: /disable button/i });
    fireEvent.click(checkBox);
    expect(checkBox).toBeChecked();
    expect(colorButton).toBeDisabled();
    fireEvent.click(checkBox);
    expect(checkBox).not.toBeChecked();
    expect(colorButton).toBeEnabled();
  });

  test('behavior of button', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: /Change to Midnight Blue/i });
    const checkBox = screen.getByRole('checkbox', { name: /disable button/i });
    fireEvent.click(checkBox);
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
    fireEvent.click(colorButton);
    expect(colorButton).toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
    fireEvent.click(checkBox);
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
    fireEvent.click(checkBox);
    expect(colorButton).toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  });
});

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    // test
  });

  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    // test
  });
});
