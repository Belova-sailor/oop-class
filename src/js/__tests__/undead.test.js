import Undead from '../undead';

test('create an object Character this Undead', () => {
  const result = new Undead('Ivan', 'Undead');
  expect(result).toEqual({
    name: 'Ivan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
