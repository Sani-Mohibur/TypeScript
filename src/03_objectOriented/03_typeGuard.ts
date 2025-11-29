type AlphaNumeric = string | number;
const add = (num1: AlphaNumeric, num2: AlphaNumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

// console.log(add(5, 5));
// console.log(add(6, "5"));
// console.log(add("5", 7));
// console.log(add("5", "5"));

type Viewer = {
  name: string;
};
type Admin = {
  name: string;
  role: string;
};

const showDetails = (value: Viewer | Admin) => {
  if ("role" in value) {
    console.log(`${value.name} is a ${value.role} user`);
  } else {
    console.log(`${value.name} is a normal user`);
  }
};
showDetails({ name: "Sani", role: "Admin" });
showDetails({ name: "Niloy" });
