const createArrWithGen = <T>(value: T) => {
  return [value];
};
const stringArr = createArrWithGen("Sani");
const numArr = createArrWithGen(22);
const objectArr = createArrWithGen({ name: "Sani", id: 6466 });
// console.log(stringArr);
// console.log(numArr);
// console.log(objectArr);

const createArrTuple = <X, Y>(param1: X, param2: Y) => {
  return [param1, param2];
};
const coordinate = createArrTuple(90, 45);
const couple = createArrTuple("Sabbir", "Nodi");
const tuple = createArrTuple(80, "A+");
// console.log(coordinate);
// console.log(couple);
// console.log(tuple);

const addStdToCourse = <T>(studentInfo: T) => {
  return {
    course: "Advanced Web Technology",
    ...studentInfo,
  };
};

const student1 = {
  name: "Nur Mohammad",
  id: "20-42629-1",
  age: 28,
};
const student2 = {
  name: "Supto",
  id: "20-42629-2",
  bloodGrp: "O+",
};
const student3 = {
  name: "Niloy",
  id: "20-42629-3",
  address: "Mirpur",
  skills: "MERN, MEAN, LAMP, LEMP",
};
const add1 = addStdToCourse(student1);
const add2 = addStdToCourse(student2);
const add3 = addStdToCourse(student3);
console.log({ add1 });
console.log({ add2 });
console.log({ add3 });
