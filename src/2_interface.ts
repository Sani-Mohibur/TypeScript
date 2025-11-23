type User = {
  id: number;
  name: string;
  designation: string;
};
type Details = {
  occupation: string;
  address: string;
  bloodGrp?: string;
};
type UserWithDetails = User & Details; //using intersection

//Interface: Object type -> array, object, function
interface IUser {
  id: number;
  name: string;
  designation: string;
}
interface IUserWithDetails extends IUser {
  occupation: string;
  address: string;
  bloodGrp?: string;
}

const user1: IUser = {
  id: 3431,
  name: "Ariyan",
  designation: "Consultant",
};
const user2: IUserWithDetails = {
  id: 3432,
  name: "Sahanur Parvez",
  designation: "Consultant",
  occupation: "Relationship Advice Counselor",
  address: "Dhaka",
};

//Array
type Arr = string[];
interface IArr {
  [index: number]: string;
}
const arr: IArr = ["Meraj", "Shakil", "Bijoy", "Sabbir"];

//Function
type Add = (num1: number, num2: number) => number;
interface IAdd {
  (num1: number, num2: number): number;
}
const add: IAdd = (num1, num2) => num1 + num2;
