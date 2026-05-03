//! type alias
type User = {
  name: string;
  age: number;
};

//! interface use only : Object type like array object and function

interface IUser {
  name: string;
  age: number;
}

//! extends interface

interface UserWithRole extends IUser{
    role: "admin" | "user"
}

type Role = {
  role: "admin" | "user";
};

// type UserWithRole = User & Role;

const user1: UserWithRole = {
  name: "suzan",
  age: 20,
  role: "admin",
};

const user2: IUser = {
  name: "sheikh",
  age: 30,
};

type IsAdmin = boolean;
const isAdmin: IsAdmin = true;
