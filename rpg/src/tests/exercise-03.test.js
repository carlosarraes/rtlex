import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

jest.mock('../service/rollMultipleDice');

const enemy = {
  id: 1,
  name: 'Chapolin Colorado',
  source: 'Chaves',
  defensePoints: 30,
};

it('testa uma vitória na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(40);

  expect(attackEnemy(20, 2, enemy).success).toBe(true);
  expect(rollMultipleDice).toBeCalledTimes(1);
});

it('testa uma derrota na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(29);

  expect(attackEnemy(20, 2, enemy).success).toBe(false);
  expect(rollMultipleDice).toBeCalledTimes(1);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(30);

  expect(attackEnemy(20, 2, enemy).success).toBe(false);
  expect(rollMultipleDice).toBeCalledTimes(1);
});
