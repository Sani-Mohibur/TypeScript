//Example 1
class Developer {
  getSleep() {
    console.log("A develpoer can sleep 10-12 hours a day");
  }
}
class JuniorDeveloper extends Developer {
  getSleep() {
    console.log("A Junior Developer can sleep 8-10 hours a day");
  }
}
class MidLevelDeveloper extends Developer {
  getSleep() {
    console.log("A Mid Level Developer can sleep 4-6 hours a day");
  }
}
class SeniorDeveloper extends Developer {
  getSleep() {
    console.log("A Senior Developer can sleep 8-10 hours a day");
  }
}

const sleepingHours = (time: Developer) => {
  time.getSleep();
};
const developer1 = new Developer();
const developer2 = new JuniorDeveloper();
const developer3 = new MidLevelDeveloper();
const developer4 = new SeniorDeveloper();
// sleepingHours(developer1);
// sleepingHours(developer2);
// sleepingHours(developer3);
// sleepingHours(developer4);

//Example 2
class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

const Area = (value: Shape) => {
  console.log(value.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(6);
const shape3 = new Rectangle(20, 10);

Area(shape1);
Area(shape2);
Area(shape3);
