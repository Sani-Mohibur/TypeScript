class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  showOccupation(job: string) {
    console.log(`${this.name} is a / an ${job}`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  doStudy(studyTime: number) {
    console.log(`${this.name} studies ${studyTime} hours daily`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(clsTime: number) {
    console.log(`${this.name} takes classes for ${clsTime} hours everyday`);
  }
}
const isStudent = (user: Person) => {
  return user instanceof Student;
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(2);
  } else user.showOccupation("unemployed person");
};

const student1 = new Student("Sabbir");
const teacher1 = new Teacher("Mr. Rana");
const person1 = new Person("Sani");

//console.log({ student1, teacher1, person1 });
getInfo(student1);
getInfo(teacher1);
getInfo(person1);
