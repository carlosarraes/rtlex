import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Exercicio', () => {
  test('1) Verifique o comportamento de adicionar uma tarefa', () => {
    render(<App />);
    const addBtn = screen.getByText(/adicionar/i);
    expect(addBtn).toHaveProperty('type', 'button');

    const inputText = screen.getByLabelText(/tarefa/i);
    expect(inputText).toHaveProperty('type', 'text');

    const taskList = screen.getByRole('list');
    const TASK1 = 'Comprar ovos';

    userEvent.type(inputText, TASK1);
    expect(inputText).toHaveValue(TASK1);
    expect(taskList).not.toHaveTextContent(TASK1);
    userEvent.click(addBtn);
    expect(inputText).toHaveValue('');
    expect(taskList).toHaveTextContent(TASK1);
  });
});
