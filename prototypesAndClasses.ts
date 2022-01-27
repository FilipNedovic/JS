// - Using ES6 classes:
// 1. Create a `PlayerCharacter` and a `NonPlayerCharacte`r with a common ancestor` Character`.
// The characters are located in a 10x10 game field, meaning they have `x` and `y` position.
// All characters appear at a random location. Create those three classes, and make sure you can query where each character is.
// 2. Make sure the `Character` class cannot be instantiated.
// 3. Add an option to set both `x` and `y` ( at the same time ) using a setter
// 4. Keep count of created characters using a static property
// Throw an error if the user tries to set x and y that are out of bounds ( 10x10 )

abstract class Character {
  x: number;
  y: number;

  static numberOfCharacters: number = 0;

  constructor(x?: number, y?: number) {
    if (x === undefined || y === undefined) {
      const getRandNumBetween = (): number => {
        const min = 0;
        const max = 15;
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      this.x = getRandNumBetween();
      this.y = getRandNumBetween();
      Character.numberOfCharacters++;
      return;
    }

    this.x = x;
    this.y = y;
  }

  coordinates() {
    if (this.x > 10 || this.y > 10) {
      throw new Error(
        `Coordinates out of bound: ${this.x}x${this.y} entered, game field is 10x10`
      );
    }
    return console.log(`Player is at ${this.x}x${this.y}`);
  }

  get position() {
    return { y: this.y, x: this.x };
  }

  set position(obj: { x: number; y: number }) {
    this.x = obj.x;
    this.y = obj.y;
  }
}

class PlayerCharacter extends Character {
  constructor(x?: number, y?: number) {
    super(x, y);
  }
}

class NonPlayerCharacter extends Character {
  constructor(x?: number, y?: number) {
    super(x, y);
  }
}

let player = new PlayerCharacter();
// Generates random coordinates
player.coordinates();

player.position = { x: 5, y: 5 };
// Player is at 5x5
player.coordinates();

player.position = { x: 13, y: 3 };
// "Coordinates out of bound: 13x3 entered, game field is 10x10"
player.coordinates();

let nonPlayer = new NonPlayerCharacter();
// Generates random coordinates
nonPlayer.coordinates();

nonPlayer.position = { x: 3, y: 8 };
// Player is at 3x8
nonPlayer.coordinates();

nonPlayer.position = { x: 9, y: 18 };
// Coordinates out of bound: 13x3 entered, game field is 10x10"
nonPlayer.coordinates();

let ab = new NonPlayerCharacter();
let abc = new NonPlayerCharacter();
let abcd = new PlayerCharacter();
let abcde = new PlayerCharacter();

// 6
console.log(Character.numberOfCharacters);



// - Rewrite the assignment using Prototypes
function Character() {
  let x: number;
  let y: number;

  if (x === undefined || y === undefined) {
    const getRandNumBetween = (): number => {
      const min = 0;
      const max = 15;
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    this.x = getRandNumBetween();
    this.y = getRandNumBetween();
    this.numberOfCharacters++;
    return;
  }

  this.x = x;
  this.y = y;
  this.numberOfCharacters++;
}

Character.prototype.coordinates = function coordinates() {
  if (this.x > 10 || this.y > 10) {
    throw new Error(
      `Coordinates out of bound: ${this.x}x${this.y} entered, game field is 10x10`
    );
  }
  return `Player is at ${this.x}x${this.y}`;
};

Character.prototype = {
  get position() {
    return { y: this.y, x: this.x };
  },
  set position(obj: { x: number; y: number }) {
    this.x = obj.x;
    this.y = obj.y;
  },
  numberOfCharacter: 0
};

let player = Object.create(Character);

console.log(player.position())
