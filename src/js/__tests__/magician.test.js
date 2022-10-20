import Magician from '../daemon';

test('create an object Character this Magician', () => {
  const result = new Magician('Superstar', 'Magician');
  expect(result).toEqual({
    name: 'Superstar',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
