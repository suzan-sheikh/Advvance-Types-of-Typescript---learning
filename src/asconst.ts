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


type RichPeopleVehicle = {
    bike: string;
    car: string;
    ship: string
};

type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true : false;

type HasBike = CheckVehicle<'bike'>