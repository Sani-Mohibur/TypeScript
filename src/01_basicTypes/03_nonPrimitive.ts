const arr = ["apple", "banana", "mango"];
const explicitArr: string[] = ["apple", "banana", "mango"];

const mixedArr = ["apple", 12, "banana", 24];
const explicitMixedArr: (string | number)[] = ["apple", 12, "banana", 24];

explicitMixedArr.push(12);

//tuple - Finite, ordered sequence of elements

const couple: [string, string] = ["Rony", "Riya"];
const nameAndId: [string, number] = ["Sani", 7476];
const destination: [string, string, number] = ["Dhaka", "Sylhet", 6];

//reference type: object

const user: {
  firstName: string;
  middleName?: string;
  lastName: string;
  organization: "Apollo"; //value => type: literal types
  readonly designation: string; //access modifier
} = {
  firstName: "Farabi",
  lastName: "Sunny",
  organization: "Apollo",
  designation: "Junior Full-Stack Developer",
};

console.log(user);
