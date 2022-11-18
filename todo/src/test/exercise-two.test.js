import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const inputText = screen.getByLabelText(/tarefa/i);
    const addBtn = screen.getByText(/adicionar/i);
    expect(inputText).toHaveProperty('type', 'text');

    listTodo.forEach((task) => {
      userEvent.type(inputText, task);
      userEvent.click(addBtn);
    });

    const taskList = screen.getByRole('list');

    listTodo.forEach((task) => {
      expect(taskList).toHaveTextContent(task);
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const testString = 'Teste';
    render(<Item content={ testString } />);
    const isValid = screen.getByText('Teste');
    expect(isValid).toBeInTheDocument();
  });
});
