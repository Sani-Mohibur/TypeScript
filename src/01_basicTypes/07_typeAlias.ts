//object - type alias
type User = {
  id: number;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  gender: "male" | "female";
  email?: string;
  designation: string;
  address?: string;
};

const user1: User = {
  id: 6064,
  name: {
    firstName: "Farabi",
    lastName: "Sunny",
  },
  gender: "male",
  designation: "Junoior Developer",
};

const user2: User = {
  id: 6064,
  name: {
    firstName: "Ridhi",
    lastName: "Sheikh",
  },
  gender: "female",
  designation: "Dancer",
};

//function - type alias
type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;
console.log(add(5, 5));
