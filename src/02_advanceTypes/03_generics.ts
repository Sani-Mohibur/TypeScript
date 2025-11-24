type GenericArr<T> = Array<T>;
const arr1: GenericArr<string> = ["A", "B", "C", "D"];
const arr2: GenericArr<number> = [1, 2, 3, 4];
const arr3: GenericArr<boolean> = [true, false, true, false];

type Coordiante<X, Y> = [X, Y];
const coordinates1: Coordiante<string, string> = ["45", "90"];
const coordinates2: Coordiante<number, number> = [45, 90];

//Object
type User = {
  name: string;
  age: number;
};
type GenericArray<T> = Array<T>;

const user1: User = {
  name: "Fahim Sheikh",
  age: 28,
};
const user2: User = {
  name: "Imam Sheikh",
  age: 29,
};
const user3: User = {
  name: "Ridhi Sheikh",
  age: 31,
};
const userList: GenericArray<User> = [
  {
    name: "Fahim Sheikh",
    age: 28,
  },
  {
    name: "Imam Sheikh",
    age: 29,
  },
  {
    name: "Ridhi Sheikh",
    age: 31,
  },
];
