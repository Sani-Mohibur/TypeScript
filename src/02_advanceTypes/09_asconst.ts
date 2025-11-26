const UserRoles = {
  admin: "ADMIN",
  moderator: "MODERATOR",
  viewer: "VIEWER",
} as const;

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.admin || role === UserRoles.moderator) {
    return true;
  } else return false;
};

const result = canEdit(UserRoles.viewer);
console.log(result);
