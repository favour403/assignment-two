

// const student = {
//   name: 'Chidi',
//   score: 50,
// };
// student.score = 90;
// console.log(student);

// //    EXAMPLE 2
// const grades = [1,2,3];
// grades.push(4);
// console.log (grades)

//    OBJECT FREEZE EXAMPLE
const student = {
    name: 'Emaka',
    age: 22,
    departemt: 'Computing'
};
//  student.age = 24
 Object.freeze(student)
 console.log(student)