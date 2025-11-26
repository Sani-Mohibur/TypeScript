class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,

    public moveType: string,
    public moveSpeed: number
  ) {}

  makeSound() {
    console.log(`${this.name} does the sound: ${this.sound}`);
  }
  speed() {
    console.log(
      `${this.name} moves: ${this.moveType} -> ${this.moveSpeed} speed`
    );
  }
}

const tiger = new Animal("Tiger", "Mammal", "Roar", "Run", 60);
const eagle = new Animal("Eagle", "Bird", "Screech", "Fly", 120);

//console.log(eagle);
tiger.speed();
