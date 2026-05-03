//? use normal type array
// const friends: string[] = ["mr. x", "mr. x", "mr. y"];
// const rollNumber: number[] = [10, 20, 30];
// const isEligibleList: boolean[] = [true, false];

//? use <> type array
// const friends: Array<string> = ["mr. x", "mr. x", "mr. y"];
// const rollNumber: Array<number> = [10, 20, 30];
// const isEligibleList: Array<boolean> = [true, false];

//? dynamically generalize Array

type GeneralizeArray<T> = Array<T>;

const friends: GeneralizeArray<string> = ["mr. x", "mr. x", "mr. y"];
const rollNumber: GeneralizeArray<number> = [10, 20, 30];
const isEligibleList: GeneralizeArray<boolean> = [true, false];

//? dynamically generalize Array with tow argument
type Coordinates<X, Y> = [X, Y];
const coordinates: Coordinates<string, string> = ["20", "30"];
const coordinates2: Coordinates<string, number> = ["20", 30];

//? array of object with generic type

type User = {name: string; age: number};

const userList: GeneralizeArray<User> = [
  {
    name: "suzan",
    age: 30,
  },
  {
    name: "sheikh",
    age: "30",
  },
  {
    device: "macbook",
  },
];
