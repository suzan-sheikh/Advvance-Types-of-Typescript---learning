//? type alias
type User = {
  name: string;
  age: number;
};

//? interface use only : Object type like array object and function

interface IUser {
  name: string;
  age: number;
}

//? extends interface

interface UserWithRole extends IUser {
  role: "admin" | "user";
}

type Role = {
  role: "admin" | "user";
};

//? type UserWithRole = User & Role;

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

type Add = (num1: number, num2: number) => number;

//? interface with function

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

console.log(add(2, 3));

type friends = string[];

//? interface with Array

interface IFrends {
  [index: number]: string;
}

const friends: IFrends = ["A", "B", "c"];
