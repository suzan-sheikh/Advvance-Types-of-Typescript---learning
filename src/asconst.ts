const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

const canEdit = (role: keyof typeof UserRoles) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor){
        return true;
    }else return false
}

console.log(canEdit(UserRoles.Admin));