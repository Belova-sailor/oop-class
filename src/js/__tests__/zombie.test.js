import Zombie from '../zombie';

test('create an object Character this Zombie', () => {
  const result = new Zombie('Bob', 'Zombie');
  expect(result).toEqual({
    name: 'Bob',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
