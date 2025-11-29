class BasicProfile {
  name: string;
  age: number;
  bloodGrp: string;

  constructor(name: string, age: number, blooddGrp: string) {
    this.name = name;
    this.age = age;
    this.bloodGrp = blooddGrp;
  }

  displayInfo(profile: string) {
    console.log(
      `${profile}:\nName: ${this.name}\nAge: ${this.age}\nBlood Group: ${this.bloodGrp}`
    );
  }
}

class Student extends BasicProfile {}
const student1 = new Student("Sani", 25, "A+");
student1.displayInfo("Student 1");

class Teacher extends BasicProfile {
  designation: string;

  constructor(
    name: string,
    age: number,
    bloodGrp: string,
    designation: string
  ) {
    super(name, age, bloodGrp);
    this.designation = designation;
  }
  assignGrade(name: string, grade: string) {
    console.log(`${name} -> ${grade}`);
  }
}
const teacher1 = new Teacher("Aminur Rahman", 38, "A+", "Lecturer");
teacher1.displayInfo("Teacher 1");
teacher1.assignGrade("Sabbir", "F");
