var Role;
(function (Role) {
  Role["admin"] = "admin";
  Role["moderator"] = "moderator";
  Role["viewer"] = "viewer";
})(Role || (Role = {}));
var canEdit = function (role) {
  if (role === Role.admin || role === Role.moderator) {
    return true;
  } else return false;
};
var user1 = canEdit(Role.admin);
console.log(user1);
