import Swordsman from '../swordsman';

test('create an object Character this Swordsman', () => {
  const result = new Swordsman('Ilya666', 'Swordsman');
  expect(result).toEqual({
    name: 'Ilya666',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
