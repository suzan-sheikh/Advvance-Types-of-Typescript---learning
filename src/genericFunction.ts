const creteArrayWithGeneric = <T>(value: T) => {
  return value;
};

// const arrString = creteArrayWithGeneric('Apple');
// const arrString = creteArrayWithGeneric(200);
// const arrString = creteArrayWithGeneric({
//     id: 231,
//     name: 'suzan'
// });

console.log(creteArrayWithGeneric("apple"));
console.log(creteArrayWithGeneric(120));
console.log(
  creteArrayWithGeneric({
    name: "suzan",
    age: 3251,
  }),
);

//? tuple with generic

// const result = <X, Y> (param1: X, param2: Y) => {
//     return [param1, param2]
// }

// console.log(result('suzan', 1230));

const student1 = {
  name: "suzan",
  hasPen: true,
};
const student2 = {
  id: 12542,
  name: "jack",
  hasCar: true,
  isAuthor: true,
};

type Student = { id: number; isAuthor: boolean };

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Ai Dev",
    ...studentInfo,
  };
};

console.log(addStudentToCourse(student2));

// const result = addStudentToCourse(student1);
// console.log(result);
