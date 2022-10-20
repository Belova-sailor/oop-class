import Daemon from '../daemon';

test('create an object Character this Daemon', () => {
  const result = new Daemon('Max', 'Daemon');
  expect(result).toEqual({
    name: 'Max',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
