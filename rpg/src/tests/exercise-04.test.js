import { render, screen } from '@testing-library/react';
import App from '../App';

it('testa a requisção para a API', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue([{
      id: 1,
      name: 'Chapolin Colorado',
      source: 'Chaves',
      defensePoints: 60,
    }]),
  });

  render(<App />);
  const listChar = await screen.findByRole('heading', { name: 'Chapolin Colorado' });
  expect(listChar).toBeInTheDocument();
});
