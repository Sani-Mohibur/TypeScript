// ? -> ternary operator: decision making
// ?? -> nullish coalescing operator: null / undefined
// ?. -> optional chaining

//ternary operator
const eligibleForMarriage = (age: number) => {
  const result =
    age >= 18
      ? "You are eligible for marriage"
      : "You are not eligibe for marriage !";
  console.log(result);
};
//eligibleForMarriage(15);

//nullish coalescing
const userTheme = null;
const selectedTheme = userTheme ?? "Dark Theme";
//console.log(selectedTheme);

const authenticated = "";
const isAuthenticated = authenticated
  ? authenticated
  : "Ternary: You are not authenticated";
const isAuthenticatedNullish =
  authenticated ?? "Nullish: You are not authenticated";
//console.log(isAuthenticated);
//console.log(isAuthenticatedNullish);

// Optional chaining (?.) enables safe access to properties or methods of an object,
// especially when dealing with potentially null or undefined values in a nested structure
const user: {
  name: string;
  age: number;
  address: {
    city: string;
    district: string;
    addressType?: "Home" | "Office" | "Others";
  };
  occupation: string;
  bloodGroup?: string;
} = {
  name: "Hamim",
  age: 27,
  address: {
    city: "Gazipur",
    district: "Gazipur",
  },
  occupation: "Police Officer",
};

const bloodGroup = user?.address?.addressType;
console.log(bloodGroup);
