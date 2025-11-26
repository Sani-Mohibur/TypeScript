//An enum (short for enumeration) in TypeScript allows the definition of a set of named constants.
//type Role = "admin" | "moderator" | "viewer";
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["moderator"] = "moderator";
    Role["viewer"] = "viewer";
})(Role || (Role = {}));
var canEdit = function (role) {
    if (role === Role.admin || role === Role.moderator) {
        return true;
    }
    else
        return false;
};
var user1 = canEdit(Role.admin);
console.log(user1);
//Documentation
//However, running any code that requires transformations, like the code
//still needs the use of --experimental-transform-types
