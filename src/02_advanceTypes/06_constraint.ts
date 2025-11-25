type RequiredInfo = { name: string; id: string | number; skills: string };
const addStdToCourse = <T extends RequiredInfo>(studentInfo: T) => {
  return {
    course: "Advanced Web Technology",
    ...studentInfo,
  };
};

const student1 = {
  name: "Nur Mohammad",
  id: "20-42629-1",
  age: 28,
  skills: "SRE",
};
const student2 = {
  name: "Supto",
  id: "20-42629-2",
  bloodGrp: "O+",
  skills: "Designer",
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
