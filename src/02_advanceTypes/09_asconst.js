var UserRoles = {
    admin: "ADMIN",
    moderator: "MODERATOR",
    viewer: "VIEWER",
};
var canEdit = function (role) {
    if (role === UserRoles.admin || role === UserRoles.moderator) {
        return true;
    }
    else
        return false;
};
var result = canEdit(UserRoles.viewer);
console.log(result);
