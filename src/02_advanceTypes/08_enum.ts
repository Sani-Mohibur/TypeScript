//An enum (short for enumeration) in TypeScript allows the definition of a set of named constants.

//type Role = "admin" | "moderator" | "viewer";
enum Role {
  admin = "admin",
  moderator = "moderator",
  viewer = "viewer",
}
const canEdit = (role: Role) => {
  if (role === Role.admin || role === Role.moderator) {
    return true;
  } else return false;
};
const user1 = canEdit(Role.admin);
console.log(user1);

//Documentation
//However, running any code that requires transformations, like the code
// still needs the use of --experimental-transform-types

//Created a js file for this code using "tsc .\file_location"
// to see the javascript file instead of enum
// as JavaScript does not have a built-in enum data type
