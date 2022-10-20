export default class Character {
  constructor(name, type) {
    const types = [
      'Boweman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Name of character must be > 2 and < 10 symbol of string!');
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw new Error('There is no such hero');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}
