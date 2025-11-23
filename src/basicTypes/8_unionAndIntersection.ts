//union
type Role = "admin" | "moderator" | "user";

const getDashboard = (role: Role) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "moderator") {
    return "Moderator Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};
console.log(getDashboard("user"));

//Intersection
type Employee = {
  id: number;
  name: string;
  designation: string;
};
type Manager = {
  specialDesignation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const member1: EmployeeManager = {
  id: 1234,
  name: "Shahriar Islam",
  designation: "Content Writer",
  specialDesignation: "HR",
  teamSize: 6,
};
console.log(member1);
