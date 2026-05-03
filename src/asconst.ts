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

// mapped type

type AreaOfNum = {
    height: number;
    width: number;
}

type AreaOfStr = {
    [key in keyof AreaOfNum]: string
}
type AreaOfBol = {
    [key in keyof AreaOfNum]: boolean
}

// Next Level

type ArrayOfNew<T> = {
    [key in keyof T]: T[key]
}

const result: ArrayOfNew<{height: number; with: string}> = {
    height: 2202,
    with: 'suzan'
}

console.log(result);